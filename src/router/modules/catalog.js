/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/layout'

/** 项目管理 */
const catalog = {
  path: '/project',
  component: Layout,
  redirect: '/project/index',
  name: 'projectmanage',
  meta: {
    title: 'projectmanage',
    icon: 'form',
    roles: ['system', 'safety', 'confidentiality']
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/density/projectManage/index'),
      name: '项目管理',
      meta: {
        title: 'projectmanage',
        roles: ['system'] // or you can only set roles in sub nav
      }
    }
    // {
    //   path: 'index/:id',
    //   component: { template: () => import('@/views/density/projectManage/index') },
    //   meta: {
    //     title: 'projectmanage',
    //     roles: ['system']
    //   }
    // },
    // {
    //   path: 'index/details',
    //   name: '项目管理',
    //   component: () => import('@/views/density/projectManage/index'),
    //   meta: {
    //     title: '详情',
    //     roles: ['system']
    //   }
    // }
  ]
}

export default catalog
