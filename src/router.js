import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequetsReceived from './pages/requests/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'


const router = createRouter({
  routes: [
    { path: '/', redirect: '/coaches'},
    { path: '/coaches', component: CoachesList },
    { 
      path: '/coaches/:id', 
      component: CoachDetail,
      props: true, 
      children: [
        { path: 'contact', component: ContactCoach}
    ]},
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequetsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  history: createWebHistory(),
});

export default router;