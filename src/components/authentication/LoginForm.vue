<script setup lang="ts">
import api from '@/services/api';
import { useAuthStore } from '@/stores/auth';
import { isAxiosError } from 'axios';
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { z } from 'zod';

const authStore = useAuthStore();
const router = useRouter();

const formData = reactive({
  username: '',
  password: '',
});

let errors: { username?: string[]; password?: string[] } = reactive({
  username: undefined,
  password: undefined,
});

const handleLogin = async () => {
  try {
    const loginSchema = z.object({
      username: z.string().min(4).max(20),
      password: z.string().min(8),
    });
    loginSchema.parse(formData);
    try {
      const { data } = await api.post('/auth/login', formData);
      authStore.setToken(data.token);
      router.push({ name: 'home' });
    } catch (err) {
      if (isAxiosError(err)) {
        if (err.response) {
          Object.assign(errors, {
            username: err.response.data.errors['username'],
            password: err.response.data.errors['password'],
          });
        }
      }
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      Object.assign(errors, {
        username: err.formErrors.fieldErrors['username'],
        password: err.formErrors.fieldErrors['password'],
      });
    }
  }
};
</script>

<template>
  <form @submit.prevent="handleLogin" method="POST">
    <div class="grid gap-2 mb-4">
      <div class="flex flex-col">
        <label class="block font-medium" for="username-inp">Username</label>
        <input
          v-model="formData.username"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="text"
          id="username-inp"
          placeholder="e.g. john.doe00"
        />
        <span v-for="(error, index) in errors.username" :key="index" class="text-red-500 text-xs">{{
          error
        }}</span>
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="password-inp">Password</label>
        <input
          v-model="formData.password"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="password"
          id="password-inp"
          placeholder="********"
        />
        <span v-for="(error, index) in errors.password" :key="index" class="text-red-500 text-xs">{{
          error
        }}</span>
      </div>
    </div>

    <div class="flex flex-col items-center gap-y-1">
      <button
        class="bg-pink-600 hover:bg-pink-500 shadow-md hover:shadow-lg text-white px-2 py-1 rounded-md w-full"
        type="submit"
      >
        Login
      </button>
      <RouterLink :to="{ name: 'register' }" class="text-pink-600 hover:text-pink-500"
        >Don't have an account yet? Register!</RouterLink
      >
    </div>
  </form>
</template>
