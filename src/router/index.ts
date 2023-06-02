import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        authRequired: true,
        guestOnly: false,
      },
    },
    {
      path: '/auth/register',
      name: 'register',
      component: () => import('@/views/authentication/RegisterView.vue'),
      meta: {
        authRequired: false,
        guestOnly: true,
      },
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/views/authentication/LoginView.vue'),
      meta: {
        authRequired: false,
        guestOnly: true,
      },
    },
    {
      path: '/book',
      name: 'book-index',
      component: () => import('@/views/book/IndexBooksView.vue'),
      meta: {
        authRequired: true,
        guestOnly: false,
      },
    },
    {
      path: '/book/:id',
      name: 'book-show',
      component: () => import('@/views/book/ShowBookView.vue'),
      meta: {
        authRequired: true,
        guestOnly: false,
      },
    },
    {
      path: '/book/create',
      name: 'book-create',
      component: () => import('@/views/book/CreateBookView.vue'),
      meta: {
        authRequired: true,
        guestOnly: false,
      },
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore();
  const token = authStore.token;

  if (token.trim().length === 0 && to.meta.authRequired) next({ name: 'login' });
  else if (token.trim().length !== 0 && to.meta.guestOnly) next({ name: 'home' });
  else next();
});

export default router;
