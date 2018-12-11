import axios from 'axios'

const url = `http://localhost:3000/api`
const endpoint = `${url}/checkouts`

const getCheckOutById = (id) => {
  return axios.get(`${endpoint}/${id}`)
}

const updateCheckOutById = (id) => {
  return axios.post(`${endpoint}/${id}`)
}

export default {
  getCheckOutById,
  updateCheckOutById,
}
