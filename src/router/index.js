import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layouts/MainLayout';
import ProductsListPage from '../pages/ProductsListPage';
import FormPage from '../pages/FormPage';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: MainLayout,
    redirect: {
      name: 'product.list'
    },
    children: [
      {
        path: "/product/list",
        component: ProductsListPage,
        name: 'product.list',
      },

      {
        path: "/form",
        component: FormPage,
        name: 'form'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
