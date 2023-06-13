import { RouterLink } from 'vue-router';

<template>
  <nav
    class="flex justify-between items-center top-0 left-0 w-full p-4 rounded-b-md border-b border-b-teal-500 shadow-lg mb-6"
  >
    <div>
      <RouterLink :to="{ name: 'home' }" class="hover:text-teal-600" activeClass="text-teal-500"
        >Home</RouterLink
      >
    </div>

    <div class="flex justify-around items-center gap-x-5">
      <RouterLink
        :to="{ name: 'book-index' }"
        class="hover:text-teal-600"
        activeClass="text-teal-500"
        >Books</RouterLink
      >
      <RouterLink
        :to="{ name: 'book-create' }"
        class="hover:text-teal-600"
        activeClass="text-teal-500"
        >Create</RouterLink
      >
    </div>
  </nav>
</template>
