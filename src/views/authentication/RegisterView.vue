<script setup lang="ts">
import RegisterForm from '@/components/authentication/RegisterForm.vue';
import BgWhiteFlexibleContainer from '@/components/containers/BgWhiteFlexibleContainer.vue';
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <BgWhiteFlexibleContainer title="Register" width="w-2/3">
      <RegisterForm />
    </BgWhiteFlexibleContainer>
  </div>
</template>
