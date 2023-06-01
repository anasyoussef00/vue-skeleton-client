<script setup lang="ts">
import CreateBookForm from '@/components/book/CreateBookForm.vue';
import BgWhiteFlexibleContainer from '@/components/containers/BgWhiteFlexibleContainer.vue';
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <BgWhiteFlexibleContainer title="Login">
      <CreateBookForm />
    </BgWhiteFlexibleContainer>
  </div>
</template>
