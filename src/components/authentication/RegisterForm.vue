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
  firstName: '',
  lastName: '',
  username: '',
  emailAddress: '',
  password: '',
  birthdate: '',
  gender: '',
});

const errors: {
  firstName?: string[];
  lastName?: string[];
  username?: string[];
  emailAddress?: string[];
  password?: string[];
  birthdate?: string[];
  gender?: string[];
} = reactive({
  firstName: undefined,
  lastName: undefined,
  username: undefined,
  emailAddress: undefined,
  password: undefined,
  birthdate: undefined,
  gender: undefined,
});

const handleRegister = async () => {
  try {
    const registerSchema = z.object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      username: z.string().min(4).max(20),
      emailAddress: z.string().email(),
      password: z.string().min(8),
      birthdate: z.string().min(1),
      gender: z.enum(['M', 'F']),
    });
    registerSchema.parse(formData);
    try {
      const { data } = await api.post('/auth/register', formData);
      authStore.setToken(data.token);
      router.push({ name: 'home' });
    } catch (err) {
      // if (isAxiosError(err)) {
      //   if (err.response) {
      //     Object.assign(errors, {
      //       username: err.response.data.errors['username'],
      //       password: err.response.data.errors['password'],
      //     });
      //   }
      // }
      console.error(err);
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      Object.assign(errors, {
        firstName: err.formErrors.fieldErrors['firstName'],
        lastName: err.formErrors.fieldErrors['lastName'],
        username: err.formErrors.fieldErrors['username'],
        emailAddress: err.formErrors.fieldErrors['emailAddress'],
        password: err.formErrors.fieldErrors['password'],
        birthdate: err.formErrors.fieldErrors['birthdate'],
        gender: err.formErrors.fieldErrors['gender'],
      });
    }
  }
};
</script>

<template>
  <form @submit.prevent="handleRegister" method="POST">
    <div class="grid grid-cols-3 gap-x-4 gap-y-3 mb-3">
      <div class="flex flex-col">
        <label class="block font-medium" for="first-name-inp">First Name</label>
        <input
          v-model="formData.firstName"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="text"
          id="first-name-inp"
          placeholder="e.g. John"
        />
        <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        >
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="last-name-inp">Last Name</label>
        <input
          v-model="formData.lastName"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="text"
          id="last-name-inp"
          placeholder="e.g. Doe"
        />
        <span v-for="(error, index) in errors.lastName" :key="index" class="text-red-500 text-xs">{{
          error
        }}</span>
      </div>

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
        <label class="block font-medium" for="email-address-inp">Email Address</label>
        <input
          v-model="formData.emailAddress"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="email"
          id="email-address-inp"
          placeholder="e.g. john.doe00@example.com"
        />
        <span
          v-for="(error, index) in errors.emailAddress"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        >
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

      <div class="flex flex-col">
        <label class="block font-medium" for="password-confirmation-inp">Confirm Password</label>
        <input
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="password"
          id="password-confirmation-inp"
          placeholder="Please repeat your password"
        />
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="birthdate-inp">Birthdate</label>
        <input
          v-model="formData.birthdate"
          class="rounded-md px-2 py-1 w-full border border-slate-300"
          type="date"
          id="birthdate-inp"
        />
        <span
          v-for="(error, index) in errors.birthdate"
          :key="index"
          class="text-red-500 text-xs"
          >{{ error }}</span
        >
      </div>

      <div class="flex flex-col">
        <label class="block font-medium" for="gender-sel">Gender</label>
        <select
          v-model="formData.gender"
          class="rounded-md px-2 py-1.5 w-full border border-slate-300 bg-white"
          id="gender-sel"
        >
          <option value="" selected disabled>Please select your gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <span v-for="(error, index) in errors.gender" :key="index" class="text-red-500 text-xs">{{
          error
        }}</span>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <RouterLink :to="{ name: 'login' }" class="text-pink-600 hover:text-pink-500"
        >Already have an account? Login!</RouterLink
      >
      <button
        class="bg-pink-600 hover:bg-pink-500 shadow-md hover:shadow-lg text-white px-2 py-1 rounded-md"
        type="submit"
      >
        Register
      </button>
    </div>
  </form>
</template>
