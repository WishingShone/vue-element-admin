import Layout from '@/layout'

const projectRouter = {
  path: '/project',
  component: Layout,
  redirect: '/project/index',
  name: 'projectmanage',
  meta: {
    title: 'projectmanage',
    icon: 'form',
    ishidden: true,
    roles: ['system', 'safety', 'confidentiality']
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/density/projectManage/index2'),
      name: 'projectmanage',
      meta: {
        title: 'projectmanage',
        ishidden: false,
        roles: ['system'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'index/:id(\\d+)',
      component: () => import('@/views/density/projectManage/index2'),
      meta: {
        title: 'projectmanage',
        noCache: true,
        activeMenu: '/project/index',
        roles: ['system']
      },
      hidden: true
    },
    {
      path: 'index/:id/details',
      name: 'projectManageDetail',
      component: () => import('@/views/density/projectManage/components/details'),
      meta: {
        title: '详情'
      },
      hidden: true
    },
    {
      path: 'edit/:id(\\d+)',
      component: () => import('@/views/density/projectManage/components/editTable'),
      name: 'EditSecret',
      meta: {
        title: '关联涉密事项',
        noCache: true,
        activeMenu: '/project/index',
        roles: ['system', 'confidentiality']
      },
      hidden: true
    }
  ]
}
export default projectRouter
