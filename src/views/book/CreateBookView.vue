<script setup lang="ts">
import NavBar from '@/components/bars/NavBar.vue';
import CreateBookForm from '@/components/book/CreateBookForm.vue';
import BgWhiteFlexibleContainer from '@/components/containers/BgWhiteFlexibleContainer.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main>
    <div class="min-h-screen flex justify-center items-center">
      <BgWhiteFlexibleContainer title="Create">
        <CreateBookForm />
      </BgWhiteFlexibleContainer>
    </div>
  </main>
</template>
