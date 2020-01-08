import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@ctitle(2, 10)',
    importance: '@integer(1, 3)',
    remark: '@csentence(15, 30)',
    pageviews: '@integer(300, 5000)'
  }))
}

export default [
  {
    url: '/secret/list',
    type: 'get',
    response: config => {
      console.log(config)
      const { importance, name, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (name && item.name.indexOf(name) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/secret/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const secret of List) {
        if (secret.id === +id) {
          return {
            code: 20000,
            data: secret
          }
        }
      }
    }
  },

  {
    url: '/secret/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/secret/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/secret/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/secret/findbyname',
    type: 'get',
    response: config => {
      console.log(config)
      const name = config.query[0]
      console.log(typeof name)
      if (!(typeof name === 'undefined')) {
        const result = List.filter(source => source.name.toLowerCase().includes(name.toLowerCase()))
        return {
          code: 20000,
          data: {
            total: result.length,
            items: result
          }
        }
      }
    }
  }
]

