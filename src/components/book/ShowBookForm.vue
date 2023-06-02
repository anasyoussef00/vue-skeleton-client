<script setup lang="ts">
import api from '@/services/api';
import { useAuthStore } from '@/stores/auth';
import type { IBookResp } from '@/types/book';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const book: IBookResp = reactive({
  id: 0,
  title: '',
  alternativeTitle: '',
  description: '',
  author: '',
  releaseDate: '',
  user: {
    id: 0,
    firstName: '',
    lastName: '',
    username: '',
    emailAddress: '',
    birthdate: '',
    gender: '',
  },
});

onMounted(async () => {
  try {
    const id = route.params.id as string;
    const { data } = await api.get<{ book: IBookResp }>(`/book/${parseInt(id)}`);
    data.book.releaseDate = new Date(data.book.releaseDate).toISOString().slice(0, 10);
    data.book.user.birthdate = data.book.user.birthdate.slice(0, 10);
    Object.assign(book, data.book);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
});

const authStore = useAuthStore();

const handleUpdate = async () => {
  try {
    const { data } = await api.put(`/book/${book.id}`, book, {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const handleDelete = async () => {
  try {
    const { data } = await api.delete(`/book/${book.id}`, {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
    });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
</script>

<template>
  <form @submit.prevent="handleUpdate">
    <div class="grid grid-cols-3 gap-x-4 gap-y-3 mb-3">
      <div class="flex flex-col">
        <label class="block font-medium" for="title-inp">Title</label>
        <input
          v-model="book.title"
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
          v-model="book.alternativeTitle"
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
          v-model="book.author"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="text"
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
          v-model="book.description"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="text"
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
          v-model="book.releaseDate"
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

    <div class="grid grid-cols-3 gap-x-4 gap-y-3 mb-3">
      <div class="flex flex-col">
        <label class="block font-medium" for="user-id-inp">User ID</label>
        <input
          v-model="book.user.id"
          class="rounded-md px-2 py-1 w-full border border-slate-300 bg-slate-200"
          type="text"
          id="user-id-inp"
          disabled
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="user-first-name-inp">User First Name</label>
        <input
          v-model="book.user.firstName"
          class="rounded-md px-2 py-1 w-full border border-slate-300 bg-slate-200"
          type="text"
          id="user-first-name-inp"
          disabled
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="user-last-name-inp">User Last Name</label>
        <input
          v-model="book.user.lastName"
          class="rounded-md px-2 py-1 w-full border border-slate-300 bg-slate-200"
          type="text"
          id="user-first-name-inp"
          disabled
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="user-username-inp">User Username</label>
        <input
          v-model="book.user.username"
          class="rounded-md px-2 py-1 w-full border border-slate-300 bg-slate-200"
          type="text"
          id="user-username-inp"
          disabled
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="user-email-address-inp">User Email Address</label>
        <input
          v-model="book.user.emailAddress"
          class="rounded-md px-2 py-1 w-full border border-slate-300 bg-slate-200"
          type="email"
          id="user-email-address-inp"
          disabled
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="user-birthdate-inp">User Birthdate</label>
        <input
          v-model="book.user.birthdate"
          class="rounded-md px-2 py-1 w-full border border-slate-300 bg-slate-200"
          type="date"
          id="user-birthdate-inp"
          disabled
        />
        <!-- <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        > -->
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="gender-sel">Gender</label>
        <select
          v-model="book.user.gender"
          class="rounded-md px-2 py-1.5 w-full border border-slate-300 bg-slate-200"
          id="gender-sel"
          disabled
        >
          <option value="" selected disabled>Please select your gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <!-- <span v-for="(error, index) in errors.gender" :key="index" class="text-red-500 text-xs">{{
          error
        }}</span> -->
      </div>
    </div>
    <div class="flex justify-between items-center">
      <button
        @click="handleDelete"
        class="bg-red-600 hover:bg-red-500 shadow-md hover:shadow-lg text-white px-2 py-1 rounded-md"
      >
        Delete
      </button>
      <button
        class="bg-teal-600 hover:bg-teal-500 shadow-md hover:shadow-lg text-white px-2 py-1 rounded-md"
        type="submit"
      >
        Update
      </button>
    </div>
  </form>
</template>
