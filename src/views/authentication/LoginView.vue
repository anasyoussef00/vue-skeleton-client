<script setup lang="ts">
import LoginForm from '@/components/authentication/LoginForm.vue';
import BgWhiteFlexibleContainer from '@/components/containers/BgWhiteFlexibleContainer.vue';
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <BgWhiteFlexibleContainer title="Login" width="w-1/3">
      <LoginForm />
    </BgWhiteFlexibleContainer>
  </div>
</template>
