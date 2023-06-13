<script setup lang="ts">
import api from '@/services/api';
import { useAuthStore } from '@/stores/auth';
import Swal from 'sweetalert2';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const formData = reactive({
  title: '',
  alternativeTitle: '',
  description: '',
  author: '',
  releaseDate: '',
});

const handleBookCreate = async () => {
  try {
    const { data } = await api.post('/book/store', formData, {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
    });
    Swal.fire({
      title: 'Nice!',
      text: 'Book created successfully',
      icon: 'success',
    });
    router.push({ name: 'book-index' });
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <form @submit.prevent="handleBookCreate" method="POST">
    <div class="grid grid-cols-3 gap-x-4 gap-y-3 mb-3">
      <div class="flex flex-col">
        <label class="block font-medium" for="title-inp">Title</label>
        <input
          v-model="formData.title"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="text"
          id="title-inp"
          placeholder="Book title"
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="alternative-title-inp">Alternative title</label>
        <input
          v-model="formData.alternativeTitle"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="text"
          id="alternative-title-inp"
          placeholder="Book alternative title"
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="author-inp">Author</label>
        <input
          v-model="formData.author"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          id="author-inp"
          placeholder="Book author"
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="description-text-area">Description</label>
        <textarea
          v-model="formData.description"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          id="description-text-area"
          placeholder="Book description"
        ></textarea>
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="release-date-inp">Release date</label>
        <input
          v-model="formData.releaseDate"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="date"
          id="release-date-inp"
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>
    </div>
    <div class="flex justify-end items-center">
      <button
        class="bg-pink-600 hover:bg-pink-500 shadow-md hover:shadow-lg text-white px-2 py-1 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</template>
