"""
将 OPCHub 服务卡片图片的彩色部分重新着色为指定红色 (#F34346)，
同时保留白色背景与灰度阴影。
"""
from PIL import Image
import numpy as np
import sys


def rgb_to_hsv(rgb: np.ndarray) -> np.ndarray:
    """Vectorized RGB -> HSV for float arrays in [0,1]."""
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    max_c = np.maximum(np.maximum(r, g), b)
    min_c = np.minimum(np.minimum(r, g), b)
    delta = max_c - min_c

    v = max_c
    s = np.where(max_c != 0, delta / max_c, 0)

    h = np.zeros_like(max_c)
    safe_delta = np.where(delta == 0, 1e-10, delta)

    hr = np.where(max_c == r, ((g - b) / safe_delta) % 6, 0)
    hg = np.where(max_c == g, ((b - r) / safe_delta) + 2, 0)
    hb = np.where(max_c == b, ((r - g) / safe_delta) + 4, 0)
    h = np.where(delta == 0, 0, hr + hg + hb)
    h = h / 6.0

    return np.stack([h, s, v], axis=-1)


def hsv_to_rgb(hsv: np.ndarray) -> np.ndarray:
    """Vectorized HSV -> RGB for float arrays in [0,1]."""
    h, s, v = hsv[..., 0], hsv[..., 1], hsv[..., 2]
    h6 = (h % 1.0) * 6.0
    i = np.floor(h6).astype(np.int32)
    f = h6 - i
    p = v * (1 - s)
    q = v * (1 - f * s)
    t = v * (1 - (1 - f) * s)

    i = i % 6

    r = np.where(i == 0, v,
        np.where(i == 1, q,
            np.where(i == 2, p,
                np.where(i == 3, p,
                    np.where(i == 4, t, v)))))
    g = np.where(i == 0, t,
        np.where(i == 1, v,
            np.where(i == 2, v,
                np.where(i == 3, q,
                    np.where(i == 4, p, p)))))
    b = np.where(i == 0, p,
        np.where(i == 1, p,
            np.where(i == 2, t,
                np.where(i == 3, v,
                    np.where(i == 4, v, q)))))

    return np.clip(np.stack([r, g, b], axis=-1), 0, 1)


def recolor_to_red(src: str, dst: str, target_hex: str = "#F34346", sat_threshold: float = 0.12):
    target_hex = target_hex.lstrip("#")
    tr, tg, tb = tuple(int(target_hex[i:i+2], 16) / 255.0 for i in (0, 2, 4))
    target_hsv = rgb_to_hsv(np.array([[[tr, tg, tb]]]))[0, 0]
    target_hue = target_hsv[0]

    img = Image.open(src).convert("RGBA")
    arr = np.array(img).astype(np.float32) / 255.0

    hsv = rgb_to_hsv(arr[..., :3])

    # 仅处理饱和度足够高且不是纯透明的像素
    mask = (hsv[..., 1] > sat_threshold) & (arr[..., 3] > 0.05)

    # 将目标像素的色相统一为目标红色，同时保留原有饱和度/亮度
    hsv[mask, 0] = target_hue
    hsv[mask, 1] = np.clip(hsv[mask, 1] * 1.05, 0, 1)

    rgb = hsv_to_rgb(hsv)
    arr[..., :3] = rgb

    out = Image.fromarray((np.clip(arr, 0, 1) * 255).astype(np.uint8))
    out.save(dst)


if __name__ == "__main__":
    files = sys.argv[1:] or ["src/assets/opchub/11.png", "src/assets/opchub/66.png"]
    for f in files:
        recolor_to_red(f, f, target_hex="#F34346")
        print(f"Done: {f}")
