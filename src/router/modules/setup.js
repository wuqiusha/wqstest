/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const setupRouter = {
  path: '/setup',
  component: Layout,
  redirect: '',
  name: 'Table',
  meta: {
    title: '系统设置',
    icon: 'list'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: { title: '角色组管理' ,icon: 'user'}
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: 'DragTable',
      meta: { title: '管理员管理',icon:'user' }
    },
    {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table/index'),
        name: 'DynamicTable',
        meta: { title: '月检视频区域管理',icon:'tab' }
      },
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table/index'),
        name: 'DynamicTable',
        meta: { title: '官网内容管理',icon:'international' }
      },
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table/index'),
        name: 'DynamicTable',
        meta: { title: '意见反馈管理',icon:'wechat' }
      },
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table/index'),
        name: 'DynamicTable',
        meta: { title: '建筑性质',icon:'table' }
      },
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table/index'),
        name: 'DynamicTable',
        meta: { title: '日志管理',icon:'tree-table' }
      },
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table/index'),
        name: 'DynamicTable',
        meta: { title: '品牌管理',icon:'list' }
      },
      {
        path: 'dynamic-table',
        component: () => import('@/views/table/dynamic-table/index'),
        name: 'DynamicTable',
        meta: { title: '商品管理',icon:'table' }
      },
    
  ]
}
export default setupRouter
