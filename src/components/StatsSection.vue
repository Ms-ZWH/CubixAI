<script setup lang="ts">
import StatNumber from './StatNumber.vue'
</script>

<template>
  <section class="py-24 md:py-36 bg-surface-base border-y border-line/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        <StatNumber :value="3000" prefix="" suffix=" 家" label="服务客户" />
        <StatNumber :value="100" suffix="+" label="行业领域" />
        <StatNumber :value="98" suffix="%+" label="好评率" />
        <StatNumber :value="250" suffix=" 万+" label="社区规模" />
      </div>
    </div>
  </section>
</template>
