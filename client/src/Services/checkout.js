import axios from 'axios'

const url = `http://localhost:3000/api`
const endpoint = `${url}/checkouts`

const getCheckOutById = (id) => {
  return axios.get(`${endpoint}/${id}`)
}

const updateTotalPriceCheckOutById = (id, params) => {
  return axios.get(`${endpoint}/${id}`, { params })
}

const saveCheckOut = (id) => {
  return axios.post(`${endpoint}/${id}`)
}

export default {
  getCheckOutById,
  updateTotalPriceCheckOutById,
  saveCheckOut,
}
