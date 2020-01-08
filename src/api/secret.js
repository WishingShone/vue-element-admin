import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/secret/list',
    method: 'get',
    params: query
  })
}

export function fetchSecret(id) {
  return request({
    url: '/secret/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/secret/pv',
    method: 'get',
    params: { pv }
  })
}

export function createSecret(data) {
  return request({
    url: '/secret/create',
    method: 'post',
    data
  })
}

export function updateSecret(data) {
  return request({
    url: '/secret/update',
    method: 'post',
    data
  })
}

export function findByName(query) {
  return request({
    url: '/secret/findbyname',
    method: 'get',
    params: query
  })
}
