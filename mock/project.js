// import Mock from 'mockjs'

const data = [
  {
    parentid: 0,
    id: 1,
    name: '陆航1',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 0,
    id: 2,
    name: '陆航2',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 0,
    id: 3,
    name: '陆航3',
    type: 'detail',
    remark: '备注', level: 2
  }, {
    parentid: 0,
    id: 4,
    name: '陆航4',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 0,
    id: 5,
    name: '陆航5',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 1,
    id: 6,
    name: '陆航1-1',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 1,
    id: 7,
    name: '陆航1-2',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 1,
    id: 8,
    name: '陆航1-3',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 1,
    id: 9,
    name: '陆航1-4',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 2,
    id: 10,
    name: '陆航2-1',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 2,
    id: 11,
    name: '陆航2-2',
    type: 'node',
    remark: '备注', level: 2
  }, {
    parentid: 3,
    id: 12,
    name: '陆航3-1',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 3,
    id: 13,
    name: '陆航3-1',
    type: 'node',
    remark: '备注', level: 2
  }, {
    parentid: 3,
    id: 14,
    name: '陆航3-2',
    type: 'node',
    remark: '备注', level: 2
  }, {
    parentid: 3,
    id: 15,
    name: '陆航3-3',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 4,
    id: 16,
    name: '陆航4-1',
    type: 'node',
    remark: '备注', level: 2
  }, {
    parentid: 4,
    id: 17,
    name: '陆航4-2',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 4,
    id: 18,
    name: '陆航4-3',
    type: 'node',
    remark: '备注', level: 2
  }, {
    parentid: 4,
    id: 19,
    name: '陆航4-4',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 4,
    id: 20,
    name: '陆航4-5',
    type: 'node',
    remark: '备注', level: 2
  }, {
    parentid: 5,
    id: 21,
    name: '陆航5-1',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 5,
    id: 22,
    name: '陆航5-2',
    type: 'node',
    remark: '备注', level: 2
  }, {
    parentid: 5,
    id: 23,
    name: '陆航5-4',
    type: 'node',
    remark: '备注', level: 2
  }, {
    parentid: 5,
    id: 24,
    name: '陆航5-3',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 6,
    id: 25,
    name: '陆航1-1-1',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 7,
    id: 26,
    name: '陆航1-2-1',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 7,
    id: 27,
    name: '陆航1-2-2',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 8,
    id: 28,
    name: '陆航1-3-1',
    type: 'detail',
    remark: '备注', level: 1
  }, {
    parentid: 25,
    id: 29,
    name: '陆航1-1-1-1',
    type: 'detail',
    remark: '备注', level: 2
  }, {
    parentid: 26,
    id: 30,
    name: '陆航1-2-1-1',
    type: 'detail',
    remark: '备注', level: 1
  }, {
    parentid: 27,
    id: 31,
    name: '陆航1-2-2-1',
    type: 'detail',
    remark: '备注', level: 1
  }, {
    parentid: 9,
    id: 32,
    name: '陆航1-4-1',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 9,
    id: 33,
    name: '陆航1-4-2',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 33,
    id: 34,
    name: '陆航1-4-2-1',
    type: 'node',
    remark: '备注', level: 0
  }, {
    parentid: 34,
    id: 35,
    name: '陆航1-4-2-1-1',
    type: 'detail',
    remark: '备注', level: 0
  }, {
    parentid: 32,
    id: 36,
    name: '陆航1-4-1-1',
    type: 'node',
    remark: '备注', level: 2
  }, {
    parentid: 36,
    id: 37,
    name: '陆航1-4-1-1-1',
    type: 'detail',
    remark: '备注', level: 2
  }, {
    parentid: 10,
    id: 38,
    name: '陆航2-1-1',
    type: 'node',
    remark: '备注', level: 1
  }, {
    parentid: 10,
    id: 39,
    name: '陆航2-1-2',
    type: 'detail',
    remark: '备注', level: 1
  }, {
    parentid: 10,
    id: 40,
    name: '陆航2-1-3',
    type: 'node',
    remark: '备注', level: 1
  }]

export default [
  {
    url: '/project/list',
    type: 'get',
    response: config => {
      const routerParams = config.query[0]
      const result = data.filter(item => item.parentid === parseInt(routerParams))
      return {
        code: 20000,
        data: result
      }
    }
  },
  {
    url: '/project/back',
    type: 'get',
    response: config => {
      const routerParams = config.query[0]
      const currentData = data.filter(item => item.id === parseInt(routerParams))
      for (const index of currentData) {
        // 遍历键名
        for (const key in index) {
          if (key === 'parentid') {
            var parentid = index[key]
          }
        }
      }
      return {
        code: 20000,
        data: parentid
      }
    }
  },
  {
    url: '/project/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/project/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

