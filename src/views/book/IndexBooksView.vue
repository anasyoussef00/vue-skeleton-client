<script setup lang="ts">
import IndexBooksTable from '@/components/book/IndexBooksTable.vue';
import BgWhiteFlexibleContainer from '@/components/containers/BgWhiteFlexibleContainer.vue';
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <BgWhiteFlexibleContainer width="w-2/3">
      <IndexBooksTable />
    </BgWhiteFlexibleContainer>
  </div>
</template>
