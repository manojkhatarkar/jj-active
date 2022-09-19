import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
var user = localStorage.getItem('user')
Vue.use(VueRouter)
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/Event/:id',
  name: 'Event',

  component: () =>
    import('../views/Detail.vue')
},

{
  path: '/DownloadCertificate/:name/:image',
  name: 'DownloadCertificate',
  component: () =>
    import('../views/DownloadCertificate.vue')
},


{
  path: '/Certificate/',
  name: 'Certificate',

  component: () =>
    import('../views/Certificate.vue')
},
{
    path: '/allEvent/',
    name: 'allEvent',
    component: () => import('../views/AllEvent.vue')
},
{
  path: '/aboutus/',
  name: 'aboutus',
  component: () =>
    import('../views/aboutus.vue')
},
{
  path: '/contactus',
  name: 'contactus',
  component: () =>
    import('../views/contactus.vue')
},
{
  path: '/PricingPolicy',
  name: 'PricingPolicy',
  component: () =>
      import('../views/PricingPolicy.vue')
},
{
  path: '/ReturnRefundPolicy',
  name: 'ReturnRefundPolicy',
  component: () =>
      import('../views/ReturnRefundPolicy.vue')
},
{
  path: '/privecypolicy',
  name: 'privecypolicy',
  component: () =>
      import('../views/privecypolicy.vue')
},
{
    path: '/TermsConditions',
    name: 'TermsConditions',
    component: () => import('../views/TermsConditions.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  var user = localStorage.getItem('user')
  var check_2 = localStorage.getItem('local_mobile');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user) {
      if (check_2 != null) {
        var paths = '/Signup';
      } else {
        var paths = '/Step1';
      }
      next({
        path: paths,
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
  if (to.matched.some(record => record.meta.requiresNoAuth)) {
    if (user) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
