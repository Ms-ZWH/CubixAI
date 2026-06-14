<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import gsap from 'gsap'
import { Icon } from '@iconify/vue'
import CasesHero from '../sections/cases/CasesHero.vue'
import CasesCTA from '../sections/cases/CasesCTA.vue'
import BrandButton from '../components/BrandButton.vue'

const clientLogosRow1 = [
  'bjyz.png', 'chjh.png', 'dyck.png', 'gzlgxy.png', 'hjcm.png',
  'jy.png', 'lseg.png', 'mbkj.png', 'mjtq.png', 'pkz.png',
]

const clientLogosRow2 = [
  'qhdx.png', 'qmzx.png', 'wksgj.png', 'xnsd.png', 'zgc.png',
  'zgdx.png', 'zglt.png', 'zgyd.png', 'zjxx.png', 'zjzy.png',
]

function getLogoUrl(name: string) {
  return new URL(`../assets/kh/${name}`, import.meta.url).href
}

interface Metric {
  label: string
  value: string
}

interface CaseItem {
  id: string
  title: string
  client: string
  pain: string[]
  solution: string[]
  result?: string
  background?: string
  solved?: string[]
  effect?: string
  image?: string
  tag: string
  category: string
  icon: string
  metrics: Metric[]
  subtitle?: string
  location?: string
}

interface Category {
  id: string
  label: string
}

const categories: Category[] = [
  { id: 'all', label: '全部' },
  { id: 'enterprise', label: '企业服务' },
  { id: 'opc', label: 'OPC产业生态' },
  { id: 'training', label: '培训' },
  { id: 'other', label: '其他' },
]

const cases: CaseItem[] = [
  
  {
    "id": "c5",
    "title": "大型央企办公智能化升级",
    "client": "中移系统集成有限公司",
    "background": "中移系统集成有限公司在日常运营中面临提升工作效率、降低运营成本的重要挑战。特别是在撰写标书、制作文档以及处理日常办公事务方面，传统人工操作方式耗时费力且容易出错，难以满足公司快速发展的需求。",
    "pain": [
      "高效撰写标书：需要快速生成高质量、符合客户需求的标书内容，减少人工撰写时间和精力成本。",
      "智能制作文档：大量重复性高、格式固定的文档制作工作耗时，且风格一致性难以保证。",
      "优化日常办公：希望实现任务分配、跟踪等日常办公事务的自动化处理，减轻员工负担，提升整体办公效率。"
    ],
    "solution": [
      "引入 ChatU 应用平台（标准版/私有部署版），使用其 AI Agent 操作系统能力。",
      "利用 ChatU 的智能文本创作功能，基于历史标书库和行业知识库训练专属智能体，自动生成标书初稿和方案建议书。",
      "采用 ChatU 的工作流（Workflow）配置，将文档制作、版本比对、任务分派等流程自动化。",
      "通过 ChatU 与内部 OA 系统无缝对接（支持钉钉、飞书、企业微信），实现文档自动归集、任务跟踪和提醒。",
      "为技术工程师提供 ChatU 知识库问答助手，快速获取产品参数、技术规范等信息。"
    ],
    "solved": [
      "标书撰写从数天缩短至数小时，减少人工错误，提高中标概率。",
      "统一文档格式和风格，自动化生成规范文件。",
      "日常办公事务自动化处理，释放员工精力。"
    ],
    "effect": "成功实现日常办公的降本增效目标。标书撰写、文档制作和日常事务处理效率显著提升，为公司可持续发展提供了有力支持。",
    "result": "实现降本增效目标，标书撰写、文档制作、日常办公效率显著提升",
    "image": new URL('@/assets/hzqy/zyxt.jpg', import.meta.url).href,
    "tag": "央企办公",
    "category": "enterprise",
    "icon": "lucide:building",
    "metrics": [
      { "label": "标书撰写", "value": "缩短周期" },
      { "label": "文档制作", "value": "成本降低" },
      { "label": "办公效率", "value": "效率提升" }
    ]
  },
  {
    "id": "c1",
    "title": "认知增强心理智能体系统",
    "client": "清华大学",
    "background": "清华大学开发 AIRelief 认知增强心理智能体系统，面向心理咨询机构、个人及非专业咨询师，需要贴合工作流的 AI 助理方案。",
    "pain": [
      "心理咨询师数量不足，来访者等待时间长。",
      "咨询记录和评估耗费大量时间。",
      "非专业咨询师缺乏实战指导和标准化工具。"
    ],
    "solution": [
      "引入 ChatU AI 应用平台，打造认知增强心理智能体。",
      "使用 ChatU 的虚拟数字人技术，提供 24 小时情绪倾听与语音/文字交互。",
      "采用 ChatU 的智能体配置，实现自动心理量表评分、风险分级预警及会话摘要生成。",
      "通过 ChatU 的工作流，辅助咨询师完成来访者信息录入、评估提醒和干预建议草稿。",
      "为新手咨询师提供 ChatU 的知识库问答，包含标准话术和干预策略参考。"
    ],
    "solved": [
      "缓解心理咨询师人力不足，提供全天候 AI 陪伴。",
      "自动化文书工作，让咨询师聚焦核心干预。",
      "提升非专业咨询师的服务质量。"
    ],
    "effect": "成功构建贴合工作流的 AI 助理系统，为心理咨询机构和准/非专业咨询师提供高效支持。",
    "result": "构建面向个人来访者的心理智能体，提升心理咨询服务效率",
    "image": new URL('@/assets/hzqy/qh.png', import.meta.url).href,
    "tag": "心理健康",
    "category": "enterprise",
    "icon": "lucide:brain",
    "metrics": [
      { "label": "服务对象", "value": "机构/非专业" },
      { "label": "核心功能", "value": "认知增强" }
    ]
  },
   {
    "id": "c6",
    "title": "社区级OPC生态模型",
    "client": "中关村AI北纬社区",
    "background": "北京海淀区的 AI 主题产业社区，面向一人公司、超级个体和小微团队，需要打造轻量化的 OPC 生态模型。",
    "pain": [
      "园区企业（尤其一人公司）缺乏 AI 能力，技术门槛高。",
      "算力成本高昂，小团队难以承担。",
      "社区内企业信息孤岛，缺乏协作和创新氛围。"
    ],
    "solution": [
      "部署 OPC Hub 园区级 AI 能力生产与交易平台，作为统一 AI 能力底座。",
      "通过 OPC Hub 提供多模型调度、Agent 化运行，将 AI 能力封装为可运行、可计量、可交易的数字商品。",
      "以算力券形式统一发放和监管算力补贴，降低企业使用门槛。",
      "集成 ChatU 的多引擎多模态能力，为园内企业提供智能体构建、工作流自动化和文档生成等工具。",
      "提供高端 AI 课程、标准化培训体系和 OPC 初级认证。",
      "组织 AI 主题沙龙、路演、技术交流活动，构建社群网络。",
      "支持私有化部署，确保数据安全和全程可追溯。"
    ],
    "solved": [
      "降低企业 AI 接入门槛，共享低成本算力。",
      "推动算力向真实应用和产业成果转化。",
      "形成'社区+平台+企业'的轻量化 OPC 生态，消除信息孤岛。"
    ],
    "effect": "实现园区企业统一 AI 能力入口。支撑多场 AI 主题沙龙与技术交流活动。验证了 OPC 在社区级载体中的可落地性。",
    "result": "验证了OPC在社区级载体中的可落地性",
    "image": new URL('@/assets/hzqy/bwsq1.png', import.meta.url).href,
    "tag": "产业园区",
    "category": "opc",
    "icon": "lucide:building2",
    "metrics": [
      { "label": "核心模式", "value": "社区+平台+企业" },
      { "label": "关键活动", "value": "AI沙龙/技术交流" }
    ]
  },
  {
    "id": "c7",
    "title": "产业园级OPC规模化落地",
    "client": "中关村（朝阳）AI Space产业园",
    "background": "北京朝阳区的 AI 产业园区，需要规模化地提升园区企业在 AI 方向的承载能力和应用落地水平。",
    "pain": [
      "园区企业 AI 应用落地难，缺乏系统化的能力支撑。",
      "算力资源分散，企业获取成本高。",
      "园区运营方需要从传统收租模式转向增值服务和生态运营。"
    ],
    "solution": [
      "部署 OPC Hub 平台，打通'算力+平台+培训+活动'的完整闭环。",
      "通过 OPC Hub 实现多算力源统一调度，企业低门槛调用算力。",
      "为园区企业统一提供 ChatU 账号（不超过约定数量），作为 AI 能力底座。",
      "引入高端 AI 课程、产业导师和 AI 运营支撑服务（内容、品牌、招商协同）。",
      "举办企业专场、行业专场路演和对接会，促进技术、场景、资本链接。",
      "可选国际化 PEC 大会，扩大园区影响力。",
      "支持全程可追溯和权威审计，保障合规性。"
    ],
    "solved": [
      "显著降低企业使用 AI 和算力的门槛。",
      "提升园区在 AI 产业方向的承载能力和差异化竞争力。",
      "帮助园区从单一房租依赖转向'基础办公免租+增值服务+股权投资'多元模式。"
    ],
    "effect": "支撑园区企业 AI 应用落地与能力提升。形成可持续运转的 OPC 产业服务体系。验证了 OPC 在产业园级别的规模化可行性。",
    "result": "显著提升园区在AI产业方向的承载能力，验证了OPC在产业园级别的规模化可行性",
    "image": new URL('@/assets/hzqy/cycyy.png', import.meta.url).href,
    "tag": "产业园区",
    "category": "opc",
    "icon": "lucide:factory",
    "metrics": [
      { "label": "闭环要素", "value": "算力/平台/培训/活动" },
      { "label": "承载能力", "value": "显著提升" }
    ]
  },
  
   {
    "id": "c9",
    "title": "",
    "client": "亦庄人工智能研究院",
    "background": "上海虹桥政务区及下辖6个街镇，在统一大市场政策背景下，禁止各地政府使用税收返还招商，地方政府转而重视营商环境和政策性服务。需要高效、精准地向企业推送和解读各类扶持政策，提升政务服务能力。",
    "pain": [
      "政策内容复杂、更新快，企业难以快速获取与自己匹配的扶持信息。",
      "传统人工政策咨询响应慢、成本高，无法做到千人千面。",
      "政府需要一种可复制、轻量化的方式，将微信政务社群与AI智能体结合，提升政策触达效率。"
    ],
    "solution": [
      "基于微信和 ChatU 平台开发完成，AI智能体测试完成后10分钟部署上线。",
      "入口设置在微信首页，用户无学习成本，即可直接使用。",
      "获得企业微信官方接口授权，确保安全稳定使用。",
      "实现千人千面：根据用户画像自动匹配对应的智能体和社群，推送个性化政策内容。",
      "打造'虹桥AI政策老师'智能体，可自动解答企业关于全球布局支持、对外直接投资项目扶持、专业服务机构支持等政策问题，并给出具体金额和条件。",
      "支持可复制模式：已在上海虹桥6个街镇等地落地。"
    ],
    "solved": [
      "将复杂、多变的政策内容转化为7×24小时在线的AI政策问答服务。",
      "替代部分人工咨询，降低政府服务成本，提升企业满意度。",
      "通过微信社群+AI智能体，实现政策精准推送和千人千面匹配。"
    ],
    "effect": "在上海虹桥6个街镇成功部署。AI智能体快速上线（10分钟），极大缩短政务服务数字化改造周期。形成了'最短路径、官方授权、可复制'的微信政务社群+AI智能体模式。",
    "result": "已在上海虹桥6个街镇落地",
    "subtitle": "上海虹桥企政通 · 专属部署",
    "image": new URL('@/assets/hzqy/yz.png', import.meta.url).href,
    "tag": "",
    "category": "enterprise",
    "icon": "lucide:landmark",
    "metrics": [
      { "label": "部署时间", "value": "10分钟" },
      { "label": "覆盖街镇", "value": "虹桥6个" }
    ]
  },
  
  {
    "id": "c4",
    "title": "种业智能体平台",
    "client": "百奥云（农业种业科技公司）",
    "background": "百奥云专注于种业领域，涉及大量水稻、玉米等品种的表型数据、基因型数据及审定信息。育种研究需要高效的数据查询、特征分析和知识问答。",
    "pain": [
      "育种数据分散，查询依赖人工翻阅表格，效率低下。",
      "品种特征分析和筛选需要专家经验，知识传承难。",
      "缺乏智能化的问答和辅助决策工具。"
    ],
    "solution": [
      "基于 ChatU 智能体平台，构建了多个种业智能体。",
      "水稻品种表型-基因型查询智能体：利用 ChatU 的多模型调度和私有数据训练能力，将育种数据库与自然语言问答结合。",
      "玉米审定品种表型分析智能体：通过 ChatU 的数据分析和工作流功能，自动对审定品种进行对比分析。",
      "BAISeeds 平台智能问答：部署 ChatU 的智能问答模块，为科研人员提供 7×24 小时知识服务。",
      "采用 ChatU 的私有智能体训练与管理功能，导入专属育种数据，自由调节模型参数，优化输出结果。"
    ],
    "solved": [
      "实现从数据查询、特征分析到知识问答的全流程智能化。",
      "降低育种专家的工作负担，加速优势组合筛选。"
    ],
    "effect": "大幅提升育种研究效率，加速新品种研发进程。展现了智能体在种业领域的强大价值。",
    "result": "实现数据查询到知识问答的全流程智能化支持，大幅提升育种研究效率，加速新品种研发进程",
    "image": new URL('@/assets/hzqy/bay.png', import.meta.url).href,
    "tag": "农业科技",
    "category": "enterprise",
    "icon": "lucide:leaf",
    "metrics": [
      { "label": "覆盖场景", "value": "查询/分析/问答" },
      { "label": "育种效率", "value": "大幅提升" }
    ]
  },
  {
    "id": "c3",
    "title": "AI科技博主全流程赋能",
    "client": "朋克周（AI前沿科技洞察者 / 自媒体）",
    "background": "朋克周作为科技自媒体，需要快速产出高质量的内容，并在多平台进行运营和粉丝互动。",
    "pain": [
      "内容创作速度跟不上热点。",
      "跨平台分发耗时耗力。",
      "粉丝互动量大，回复不及时。"
    ],
    "solution": [
      "引入 ChatU AI 应用平台，用于创作、优化、运营和互动全流程。",
      "使用 ChatU 的智能文本创作生成科技热点解读长文。",
      "利用 ChatU 的多平台集成能力（微信、微博、抖音等），自动拆解内容为适配不同平台的短文案、标题和卡片。",
      "设置 ChatU 的智能体自动回复粉丝评论，分析话题趋势。",
      "采用 ChatU 的 UPPT 功能快速制作直播提纲和演示文稿。"
    ],
    "solved": [
      "大幅缩短内容产出时间，从数小时到数分钟。",
      "实现一键多平台适配分发，降低运营人力。",
      "7×24 小时粉丝互动，提升用户粘性。"
    ],
    "effect": "在创作、优化、运营、互动全流程实现高效赋能与创新，全面提升影响力与传播效果。",
    "result": "全面提升影响力与传播效果",
    "image": new URL('@/assets/hzqy/pkz.png', import.meta.url).href,
    "tag": "内容创作",
    "category": "enterprise",
    "icon": "lucide:sparkles",
    "metrics": [
      { "label": "赋能环节", "value": "全流程赋能" },
      { "label": "效果", "value": "提升传播" }
    ]
  },
  //  {
  //   "id": "c8",
  //   "title": "政务社群+AI智能体",
  //   "client": "上海虹桥企政通（上海虹桥政务区/相关街镇）",
  //   "background": "上海虹桥政务区及下辖6个街镇，在统一大市场政策背景下，禁止各地政府使用税收返还招商，地方政府转而重视营商环境和政策性服务。需要高效、精准地向企业推送和解读各类扶持政策，提升政务服务能力。",
  //   "pain": [
  //     "政策内容复杂、更新快，企业难以快速获取与自己匹配的扶持信息。",
  //     "传统人工政策咨询响应慢、成本高，无法做到千人千面。",
  //     "政府需要一种可复制、轻量化的方式，将微信政务社群与AI智能体结合，提升政策触达效率。"
  //   ],
  //   "solution": [
  //     "基于微信和 ChatU 平台开发完成，AI智能体测试完成后10分钟部署上线。",
  //     "入口设置在微信首页，用户无学习成本，即可直接使用。",
  //     "获得企业微信官方接口授权，确保安全稳定使用。",
  //     "实现千人千面：根据用户画像自动匹配对应的智能体和社群，推送个性化政策内容。",
  //     "打造'虹桥AI政策老师'智能体，可自动解答企业关于全球布局支持、对外直接投资项目扶持、专业服务机构支持等政策问题，并给出具体金额和条件。",
  //     "支持可复制模式：已在上海虹桥6个街镇等地落地。"
  //   ],
  //   "solved": [
  //     "将复杂、多变的政策内容转化为7×24小时在线的AI政策问答服务。",
  //     "替代部分人工咨询，降低政府服务成本，提升企业满意度。",
  //     "通过微信社群+AI智能体，实现政策精准推送和千人千面匹配。"
  //   ],
  //   "effect": "在上海虹桥6个街镇成功部署。AI智能体快速上线（10分钟），极大缩短政务服务数字化改造周期。形成了'最短路径、官方授权、可复制'的微信政务社群+AI智能体模式。",
  //   "result": "已在上海虹桥6个街镇等地落地",
  //   "image": getHzqyImage('shhq.png'),
  //   "tag": "政务服务",
  //   "category": "enterprise",
  //   "icon": "lucide:landmark",
  //   "metrics": [
  //     { "label": "部署时间", "value": "10分钟" },
  //     { "label": "覆盖街镇", "value": "虹桥6个" }
  //   ]
  // },
   {
    "id": "c11",
    "title": "政务社群+AI智能体",
    "client": "云南财经学院",
    "pain": [
      "统一大市场后禁止税收返还招商，需转向营商环境与政策性服务",
      "政务服务触达路径长、用户学习成本高"
    ],
    "solution": [
      "基于微信与ChatU平台开发，AI智能体测试完成后10分钟部署上线",
      "入口置于微信首页，用户零学习成本使用",
      "获企微官方接口授权，安全稳定",
      "根据用户画像自动匹配智能体和社群，实现千人千面"
    ],
    "result": "已在上海虹桥6个街镇等地落地",
    "image": new URL('@/assets/hzqy/yndx.png', import.meta.url).href,
    "tag": "政务服务",
    "category": "training",
    "icon": "lucide:landmark",
    "metrics": [
      { "label": "部署时间", "value": "10分钟" },
      { "label": "覆盖街镇", "value": "虹桥6个" }
    ]
  },
  
   {
    "id": "c10",
    "title": "AI赋能金融数据服务培训",
    "client": "Refinitiv（路孚特）",
    "background": "Refinitiv（路孚特）是全球领先的金融数据和基础设施提供商，为全球超过4万家金融机构提供新闻、数据、分析和交易平台服务。随着AIGC技术的快速发展，路孚特希望将AI能力融入内部工作流程与客户服务中，提升数据处理效率、内容生成质量以及员工对AI工具的掌握程度。",
    "pain": [
      "金融数据量庞大，分析师和内容团队需耗费大量时间进行信息提取、摘要撰写与报告生成；",
      "内部员工对AI大模型的应用能力参差不齐，缺乏系统化的实战指导；",
      "需要确保AI生成内容的准确性、合规性与可追溯性，满足金融行业严苛的监管要求。"
    ],
    "solution": [
      "软积木为路孚特量身打造了'AI赋能金融数据服务'专题培训，结合公司自有的ChatU平台能力与实战化课程体系。",
      "AI基础与金融场景适配：讲解大语言模型原理、提示工程技巧，重点围绕金融研报摘要、新闻情绪分析、数据查询自动化等场景进行案例拆解。",
      "多模型选择与私有化部署：基于软积木支持的多引擎能力，指导路孚特技术团队如何在合规前提下选择适合的模型，并完成企业内部私有化部署。",
      "智能体（Agent）构建工作坊：利用ChatU的智能体市场功能，手把手搭建用于内部数据检索、合规检查、自动生成周报的AI Agent，实现'即插即用、持续进化'。",
      "数据安全与合规专项：结合国家监管要求和金融行业标准，培训内容包括关键词过滤、图文审查、内容溯源等，确保AI输出符合规范。",
      "培训形式——线下集中授课：由软积木精英讲师团队（含微软MVP、Google技术专家）赴路孚特北京、上海办公室进行3天全封闭培训；",
      "培训形式——实战陪跑：培训后提供为期4周的在线答疑与项目陪跑，帮助路孚特团队完成第一个内部AI工具的上线；",
      "培训形式——认证考核：通过结业考试的学员获得软积木与路孚特联合颁发的AI实战能力证书。"
    ],
    "solved": [
      "效率提升：路孚特内容团队利用AI辅助生成摘要和报告，单篇研报处理时间平均缩短约40%；",
      "自主可控：成功部署了内部私有化的AI助手，覆盖数据查询、合规预检等5个核心业务场景；",
      "人才沉淀：超过80名技术及业务人员完成培训，其中20人成为内部AI推广大使，持续推动各部门智能化转型；"
    ],
    "effect": "路孚特内容团队利用AI辅助生成摘要和报告，单篇研报处理时间平均缩短约40%；成功部署内部私有化AI助手覆盖5个核心业务场景；超过80名人员完成培训，20人成为内部AI推广大使。",
    "result": "单篇研报处理时间平均缩短约40%，成功部署覆盖5个核心业务场景的私有化AI助手，80余名员工完成培训",
    "image": new URL('@/assets/hzqy/lft.jpg', import.meta.url).href,
    "tag": "金融数据",
    "category": "training",
    "icon": "lucide:landmark",
    "metrics": [
      { "label": "研报处理效率", "value": "缩短40%" },
      { "label": "培训人数", "value": "80+" }
    ]
  },
  
  {
    "id": "c2",
    "title": "英语培训智能化问答",
    "client": "天天爱译（英语培训教育机构）",
    "background": "一家英语培训教育机构，需要为学员提供翻译、纠错、教学等智能问答服务，希望将 AI 整合到微信中方便学员使用。",
    "pain": [
      "学员课后缺乏即时辅导资源。",
      "教师重复性答疑耗时多。",
      "语言培训中纠错与翻译需求频繁，人工响应慢。"
    ],
    "solution": [
      "将 ChatU 配置到微信中，为学员提供智能问答服务。",
      "使用 ChatU 的多语种互译和文本改写功能，实现实时翻译和纠错。",
      "部署 ChatU 的教学智能体，基于机构课程内容训练知识库，自动回答学习问题。",
      "利用 ChatU 的多模态交互支持语音输入，方便学员口语练习。",
      "结合 ChatU 的文件分析功能，辅助教师批改作文和生成练习材料。"
    ],
    "solved": [
      "学员随时获得翻译、纠错和教学解答，提升学习体验。",
      "释放教师重复性答疑时间，聚焦深度教学。",
      "整合多种 AI 技术（机器翻译、自然语言处理、语音合成识别），提供全面语言学习支持。"
    ],
    "effect": "成功为学员提供 7×24 小时智能问答服务，显著提升机构服务能力和学员满意度。",
    "result": "提供全面、准确、有趣的语言学习体验，提升教学响应效率",
    "image": new URL('@/assets/hzqy/ttay.png', import.meta.url).href,
    "tag": "教育",
    "category": "enterprise",
    "icon": "lucide:languages",
    "metrics": [
      { "label": "服务渠道", "value": "微信" },
      { "label": "功能覆盖", "value": "翻译/纠错/教学" }
    ]
  },
]

const activeCat = ref('all')
const selectedCase = ref<CaseItem | null>(null)
const isModalOpen = ref(false)

const filteredCases = computed(() => {
  if (activeCat.value === 'all') return cases
  return cases.filter((c) => c.category === activeCat.value)
})

function switchCategory(id: string) {
  activeCat.value = id
}

function openModal(c: CaseItem) {
  selectedCase.value = c
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    gsap.fromTo(
      '.case-modal-overlay',
      { opacity: 0 },
      { opacity: 1, duration: 0.2 }
    )
    gsap.fromTo(
      '.case-modal-content',
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.35, delay: 0.05, ease: 'power2.out' }
    )
  })
}

function closeModal() {
  gsap.to('.case-modal-content', {
    opacity: 0,
    scale: 0.95,
    y: 10,
    duration: 0.2,
    ease: 'power2.in',
  })
  gsap.to('.case-modal-overlay', {
    opacity: 0,
    duration: 0.25,
    delay: 0.1,
    onComplete: () => {
      isModalOpen.value = false
      selectedCase.value = null
      document.body.style.overflow = ''
    },
  })
}

watch(filteredCases, () => {
  nextTick(() => {
    gsap.fromTo(
      '.case-card',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out' }
    )
  })
})

// 初始动画
nextTick(() => {
  gsap.fromTo(
    '.case-card',
    { opacity: 0, x: 40 },
    { opacity: 1, x: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
  )
})
</script>

<template>
  <div class="min-h-screen bg-surface-base">
    <CasesHero />

    <!-- Tab -->
    <div class="sticky top-16 md:top-20 z-40 bg-surface-base/95 backdrop-blur-xl border-b border-line/30 py-3">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center gap-2 overflow-x-auto" style="scrollbar-width: none;">
          <button
            v-for="item in categories"
            :key="item.id"
            class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0"
            :class="activeCat === item.id ? 'bg-brand text-white shadow-sm' : 'bg-[#F3F5F2] text-ink-secondary hover:text-ink-primary'"
            @click="switchCategory(item.id)"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Case Cards -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8">
          <div
            v-for="c in filteredCases"
            :key="c.id"
            class="case-card rounded-3xl overflow-hidden bg-white shadow-card border border-line/50 flex flex-col lg:flex-row"
          >
            <!-- Left: Text (60%) -->
            <div class="w-full lg:w-[60%] p-6 md:p-10 flex flex-col justify-center">
              <!-- Category Label -->
              <div class="mb-3">
                <span
                  class="px-3 py-1 rounded-md text-sm font-semibold bg-brand-soft text-brand"
                >
                  {{ categories.find(cat => cat.id === c.category)?.label }}
                </span>
              </div>

              <!-- Title -->
              <h2
                class="text-2xl md:text-[28px] font-bold text-ink-primary leading-tight"
              >
                {{ c.client }}
              </h2>

              <p v-if="c.subtitle" class="mt-2 text-base text-ink-secondary">
                {{ c.subtitle }}
              </p>

              <p
                v-if="c.location"
                class="mt-2 text-sm text-ink-secondary border-l-2 border-brand pl-3"
              >
                {{ c.location }}
              </p>

              <!-- Metrics -->
              <div class="flex flex-wrap gap-6 md:gap-10 mt-6">
                <div v-for="m in c.metrics" :key="m.label">
                  <div
                    class="text-2xl md:text-3xl font-bold text-brand tracking-tight"
                  >
                    {{ m.value }}
                  </div>
                  <div class="text-sm text-ink-secondary mt-1">
                    {{ m.label }}
                  </div>
                </div>
              </div>

              <!-- Button -->
              <div class="mt-8">
                <BrandButton size="sm" @click="openModal(c)">
                  案例详情
                </BrandButton>
              </div>
            </div>

            <!-- Right: Visual (40%) with clip-path -->
            <div
              class="relative w-full lg:w-[40%] min-h-[200px] lg:min-h-[320px] overflow-hidden"
              :style="{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              }"
              :class="
                'lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)]'
              "
            >
              <template v-if="c.image">
                <template v-if="c.id === 'c9'">
                  <div class="absolute inset-0 bg-[#2563EB] flex items-center justify-center p-6">
                    <img
                      :src="c.image"
                      class="max-w-full max-h-full object-contain"
                      :alt="c.client"
                    />
                  </div>
                </template>
                <template v-else>
                  <img
                    :src="c.image"
                    class="absolute inset-0 w-full h-full object-cover"
                    :alt="c.client"
                  />
                </template>
              </template>
              <template v-else>
                <div
                  class="absolute inset-0 bg-gradient-to-br from-brand via-brand to-brand-deep"
                />
                <div
                  class="absolute inset-0 opacity-20"
                  style="
                    background: radial-gradient(
                      circle at 30% 30%,
                      rgba(255, 255, 255, 0.3),
                      transparent 60%
                    );
                  "
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <Icon
                    :icon="c.icon"
                    class="w-24 h-24 text-white/25"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Modal -->
    <Teleport to="body">
      <div
        v-if="isModalOpen"
        class="case-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4"
        style="background: rgba(0, 0, 0, 0.55); backdrop-filter: blur(8px)"
        @click.self="closeModal"
      >
        <div
          class="case-modal-content bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <!-- Header -->
          <div
            class="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-line/50 px-6 md:px-8 py-5 flex items-start justify-between gap-4"
          >
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span
                  class="px-3 py-1 rounded-md text-sm font-semibold bg-brand-soft text-brand"
                >
                  {{ categories.find(cat => cat.id === selectedCase?.category)?.label }}
                </span>
                <span class="text-xs text-ink-tertiary">
                {{ selectedCase?.title }}
                </span>
              </div>
              <h3
                class="text-xl md:text-2xl font-bold text-ink-primary leading-tight"
              >
                  {{ selectedCase?.client }}
              </h3>
            </div>
            <button
              class="shrink-0 w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center text-ink-secondary hover:text-ink-primary hover:bg-surface-hover transition-colors"
              @click="closeModal"
            >
              <Icon icon="lucide:x" class="w-5 h-5" />
            </button>
          </div>

          <!-- Body -->
          <div class="px-6 md:px-8 py-6 space-y-6">
            <!-- 客户背景 -->
            <div>
              <h4
                class="flex items-center gap-2 text-sm font-bold text-ink-primary mb-3"
              >
                <Icon icon="lucide:building" class="w-4 h-4 text-brand" />
                客户背景
              </h4>
              <p class="text-base text-ink-secondary leading-relaxed">
                {{ selectedCase?.background || selectedCase?.client }}
              </p>
            </div>

            <!-- 核心痛点 -->
            <div
              class="rounded-2xl bg-[#FEF2F2] border border-[#FECACA] p-5 md:p-6"
            >
              <h4
                class="flex items-center gap-2 text-sm font-bold text-[#991B1B] mb-4"
              >
                <Icon icon="lucide:alert-circle" class="w-4 h-4" />
                核心痛点
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(p, idx) in selectedCase?.pain"
                  :key="idx"
                  class="text-sm md:text-base text-[#7F1D1D] leading-relaxed flex items-start gap-2.5"
                >
                  <span
                    class="mt-2 w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"
                  />
                  {{ p }}
                </li>
              </ul>
            </div>

            <!-- 方案细节 -->
            <div>
              <h4
                class="flex items-center gap-2 text-sm font-bold text-brand mb-4"
              >
                <Icon icon="lucide:check-circle" class="w-4 h-4" />
                方案细节
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(s, idx) in selectedCase?.solution"
                  :key="idx"
                  class="text-base text-ink-secondary leading-relaxed flex items-start gap-2.5"
                >
                  <Icon
                    icon="lucide:check"
                    class="w-5 h-5 text-brand shrink-0 mt-0.5"
                  />
                  {{ s }}
                </li>
              </ul>
            </div>

            <!-- 解决了什么问题 -->
            <div v-if="selectedCase?.solved?.length">
              <h4
                class="flex items-center gap-2 text-sm font-bold text-brand mb-4"
              >
                <Icon icon="lucide:check-circle" class="w-4 h-4" />
                解决问题
              </h4>
              <ul class="space-y-3">
                <li
                  v-for="(s, idx) in selectedCase.solved"
                  :key="idx"
                  class="text-base text-ink-secondary leading-relaxed flex items-start gap-2.5"
                >
                  <Icon
                    icon="lucide:check"
                    class="w-5 h-5 text-brand shrink-0 mt-0.5"
                  />
                  {{ s }}
                </li>
              </ul>
            </div>

            <!-- 成效 -->
            <div
              v-if="selectedCase?.effect || selectedCase?.result"
              class="rounded-xl bg-brand-soft border border-brand/20 p-4 md:p-5"
            >
              <p class="text-sm md:text-base font-semibold text-brand">
                <span class="inline-flex items-center gap-2">
                  <Icon icon="lucide:trending-up" class="w-4 h-4" />
                  成效：
                </span>
                {{ selectedCase?.effect || selectedCase.result }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- 签约客户 -->
    <section class="py-16 md:py-24 bg-surface-base overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20 md:mb-28">
          <h2 class="text-2xl md:text-3xl font-semibold text-ink-primary tracking-tight">
            签约客户
          </h2>
          <p class="mt-3 text-base text-ink-secondary">
            他们都在使用我们的产品与服务
          </p>
        </div>
      </div>

      <!-- Marquee Row 1 -->
      <div class="relative w-full mb-16 md:mb-20">
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to right, #FAFAF7, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to left, #FAFAF7, transparent);"
        />

        <div class="flex cases-marquee-track">
          <div
            v-for="logo in clientLogosRow1"
            :key="logo"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
          <div
            v-for="logo in clientLogosRow1"
            :key="`${logo}-dup`"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Marquee Row 2 (reverse) -->
      <div class="relative w-full">
        <div
          class="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to right, #FAFAF7, transparent);"
        />
        <div
          class="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10"
          style="background: linear-gradient(to left, #FAFAF7, transparent);"
        />

        <div class="flex cases-marquee-track-reverse">
          <div
            v-for="logo in clientLogosRow2"
            :key="logo"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
          <div
            v-for="logo in clientLogosRow2"
            :key="`${logo}-dup`"
            class="flex-shrink-0 flex items-center justify-center w-32 md:w-40 px-2"
          >
            <img
              :src="getLogoUrl(logo)"
              :alt="logo.replace('.png', '')"
              class="w-full h-8 md:h-10 object-contain transition-all duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <CasesCTA />
  </div>
</template>

<style scoped>
@keyframes cases-marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes cases-marquee-scroll-reverse {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.cases-marquee-track {
  animation: cases-marquee-scroll 40s linear infinite;
  width: max-content;
}

.cases-marquee-track-reverse {
  animation: cases-marquee-scroll-reverse 40s linear infinite;
  width: max-content;
}

.cases-marquee-track:hover,
.cases-marquee-track-reverse:hover {
  animation-play-state: paused;
}
</style>
