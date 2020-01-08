import Mock from 'mockjs'

const List = []
const count = 30

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    label: '@ctitle(2, 8)',
    children: [{
      id: '@increment(40)',
      label: '@cword(2, 8)',
      children: [{
        id: '@increment(80)',
        label: '@csentence(2, 8)'
      }, {
        id: '@increment(120)',
        label: '@city'
      }]
    }]
  }))
}

export default [
  {
    url: '/template/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: List
      }
    }
  }
]
