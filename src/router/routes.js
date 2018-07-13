
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      {
        path: 'olar',
        component: () => import('pages/olar'),
      },
      { path: '/tab1', component: () => import('pages/tab1') },
      { path: '/tab2', component: () => import('pages/tab2') },
      { path: '/tab3', component: () => import('pages/tab3') },
    ],
  },



  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
