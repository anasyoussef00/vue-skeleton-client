<script setup lang="ts">
defineProps<{ title?: string; width?: string }>();
</script>

<template>
  <div class="bg-white border border-slate-300 rounded-lg shadow-lg px-6 py-4" :class="width">
    <div v-if="title" class="mb-3">
      <h1 class="text-2xl font-bold text-center mb-1.5">{{ title }}</h1>
      <hr />
    </div>
    <slot></slot>
  </div>
</template>
