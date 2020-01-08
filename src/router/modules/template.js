import Layout from '@/layout'

const templateRouter = {
  path: '/template',
  component: Layout,
  redirect: '/template/index',
  name: 'templatemanage',
  meta: {
    title: 'templatemanage',
    icon: 'form',
    roles: ['system', 'safety']
  },
  children: [
    {
      path: 'type',
      component: () => import('@/views/density/templateManage/editTemp'),
      name: '模板类型管理',
      meta: {
        title: '模板类型管理',
        icon: 'skill',
        roles: ['system', 'confidentiality'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'index',
      component: () => import('@/views/density/templateManage/index'),
      name: '模板管理',
      meta: {
        title: 'templatemanage',
        icon: 'skill',
        roles: ['system', 'confidentiality'] // or you can only set roles in sub nav
      }
    },
    {
      path: 'index/:id(\\d+)',
      component: () => import('@/views/density/templateManage/index'),
      name: '模板管理',
      meta: {
        title: 'templatemanage',
        icon: 'skill',
        roles: ['system', 'confidentiality'] // or you can only set roles in sub nav
      },
      hidden: true
    }
  ] }
export default templateRouter
