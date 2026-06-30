<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StatNumber from './StatNumber.vue'

const { t } = useI18n()
</script>

<template>
  <section class="py-24 md:py-36 bg-surface-base border-y border-line/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        <StatNumber :value="3000" prefix="" suffix=" 家" :label="t('home.stats.customers')" />
        <StatNumber :value="100" suffix="+" :label="t('home.stats.industries')" />
        <StatNumber :value="98" suffix="%+" :label="t('home.stats.satisfaction')" />
        <StatNumber :value="250" suffix=" 万+" :label="t('home.stats.community')" />
      </div>
    </div>
  </section>
</template>
