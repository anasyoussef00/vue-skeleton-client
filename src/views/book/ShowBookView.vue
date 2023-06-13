<script setup lang="ts">
import NavBar from '@/components/bars/NavBar.vue';
import ShowBookForm from '@/components/book/ShowBookForm.vue';
import BgWhiteFlexibleContainer from '@/components/containers/BgWhiteFlexibleContainer.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <main>
    <div class="min-h-screen flex justify-center items-center">
      <BgWhiteFlexibleContainer title="Update/Delete" width="w-2/3">
        <ShowBookForm />
      </BgWhiteFlexibleContainer>
    </div>
  </main>
</template>
