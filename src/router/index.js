import { createRouter, createWebHistory } from 'vue-router'
import CartView from '@/views/users/CartView.vue'
import CheckoutView from '@/views/users/CheckoutView.vue'
import HomeView from '@/views/users/HomeView.vue'
import ProfileView from '@/views/users/ProfileView.vue'
import SearchView from '@/views/users/SearchView.vue'
import SuccessView from '@/views/users/SuccessView.vue'
import LoginView from '@/views/admin/LoginView.vue'
import DashboardView from '@/views/admin/DashboardView.vue'

import AdminOrderDetail from '@/views/admin/order/DetailView.vue'
import AdminOrderList from '@/views/admin/order/ListView.vue'
import AdminProductList from '@/views/admin/product/ListView.vue'
import AdminProductUpdate from '@/views/admin/product/UpdateView.vue'
import AdminUserList from '@/views/admin/user/ListView.vue'
import AdminUserUpdate from '@/views/admin/user/UpdateView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: LoginView
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: DashboardView
    },
    {
      path: '/admin/orders',
      name: 'admin-orders-list',
      component: AdminOrderList
    },
    {
      path: '/admin/orders/detail/:id',
      name: 'admin-order-detail',
      component: AdminOrderDetail
    },
    {
      path: '/admin/products/list',
      name: 'admin-products-list',
      component: AdminProductList
    },
    {
      path: '/admin/product/create',
      name: 'admin-product-create',
      component: AdminProductUpdate
    },
    {
      path: '/admin/product/update/:id',
      name: 'admin-product-update',
      component: AdminProductUpdate
    },
    {
      path: '/admin/users/list',
      name: 'admin-users-list',
      component: AdminUserList
    },
    {
      path: '/admin/users/update/:id',
      name: 'admin-user-update',
      component: AdminUserUpdate
    },
  ]
})

export default router
