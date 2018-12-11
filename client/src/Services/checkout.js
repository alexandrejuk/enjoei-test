import axios from 'axios'

const url = `http://192.168.1.135:3000/api`
const endpoint = `${url}/checkouts`

const getCheckOutById = (id) => {
  return axios.get(`${endpoint}/${id}`)
}

const updateTotalPriceCheckOutById = (id, params) => {
  return axios.get(`${endpoint}/${id}`, { params })
}

const updateCheckOutById = (id) => {
  return axios.post(`${endpoint}/${id}`)
}

export default {
  getCheckOutById,
  updateCheckOutById,
  updateTotalPriceCheckOutById,
}
