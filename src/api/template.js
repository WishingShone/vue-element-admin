import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/template/list',
    method: 'get'
  })
}

export function fetchtemplate(id) {
  return request({
    url: '/template/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/template/pv',
    method: 'get',
    params: { pv }
  })
}

export function createtemplate(data) {
  return request({
    url: '/template/create',
    method: 'post',
    data
  })
}

export function updatetemplate(data) {
  return request({
    url: '/template/update',
    method: 'post',
    data
  })
}

export function findByName(query) {
  return request({
    url: '/template/findbyname',
    method: 'get',
    params: query
  })
}
