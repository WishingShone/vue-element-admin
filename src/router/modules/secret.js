import Layout from '@/layout'

const secretRouter = {
  path: '/secret',
  component: Layout,
  redirect: '/secret/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/density/secretManage/index'),
      name: '涉密事项管理',
      meta: {
        title: 'secretmanage',
        icon: 'skill',
        roles: ['system'],
        noCache: true }
    }
  ]
}
export default secretRouter
