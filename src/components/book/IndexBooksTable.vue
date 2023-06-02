<script setup lang="ts">
import api from '@/services/api';
import type { IBookResp } from '@/types/book';
import { onMounted, ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const books: Ref<IBookResp[]> = ref([]);

onMounted(async () => {
  try {
    const { data } = await api.get<{ books: IBookResp[] }>('/book');
    books.value = data.books;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
});

const showBook = (id: number) => router.push({ name: 'book-show', params: { id } });
</script>

<template>
  <div class="overflow-x-auto w-full">
    <table
      class="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden"
    >
      <thead class="bg-gray-900">
        <tr class="text-white text-left">
          <th class="font-semibold text-sm uppercase px-6 py-4">Id</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Title</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Alternative Title</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Description</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Author</th>
          <th class="font-semibold text-sm uppercase px-6 py-4">Release Date</th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200">
        <tr
          v-for="book in books"
          :key="book.id"
          class="px-6 py-4 hover:bg-slate-100 cursor-pointer"
          @click="showBook(book.id)"
        >
          <td class="px-6 py-4">
            <p class="text-gray-500 text-sm font-semibold tracking-wide">{{ book.id }}</p>
          </td>
          <td class="px-6 py-4">
            <p class="text-gray-500 text-sm font-semibold tracking-wide">{{ book.title }}</p>
          </td>
          <td class="px-6 py-4">
            <p class="text-gray-500 text-sm font-semibold tracking-wide">
              {{ book.alternativeTitle }}
            </p>
          </td>
          <td class="px-6 py-4">
            <p class="text-gray-500 text-sm font-semibold tracking-wide">{{ book.description }}</p>
          </td>
          <td class="px-6 py-4">
            <p class="text-gray-500 text-sm font-semibold tracking-wide">{{ book.author }}</p>
          </td>
          <td class="px-6 py-4">
            <p class="text-gray-500 text-sm font-semibold tracking-wide">
              {{ new Date(book.releaseDate).toDateString() }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
