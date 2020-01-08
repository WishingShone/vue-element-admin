import request from '@/utils/request'

export function fetchList(query) {
  console.log('id')
  console.log(query)
  return request({
    url: '/project/list',
    method: 'get',
    params: query
  })
}

export function getParentid(query) {
  return request({
    url: '/project/back',
    method: 'get',
    params: query
  })
}

export function createProject(data) {
  return request({
    url: '/project/create',
    method: 'post',
    data
  })
}

export function updateProject(data) {
  return request({
    url: '/project/update',
    method: 'post',
    data
  })
}

export function fetchSecretList(query) {
  return request({
    url: '/project/secretlist',
    method: 'get',
    params: query
  })
}
