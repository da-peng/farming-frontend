import { defineConfig } from 'umi';

export default defineConfig({
//   nodeModulesTransform: {
//     type: 'none',
//   },

routes: [
    {
      path: '/user',
      component: '@/layouts/user/user',
      routes: [
        { path: '/user/login', component: '@/pages/login/login' },
        { path: '/user/register', component: '@/pages/register/register' },
      ]
    }
   
  ],
  dva: {
    // immer: true,
    hmr: false,
  },
});
