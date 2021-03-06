import axios from 'axios'
import { BASE_API_URL } from '../common/connection'

/**
 * TODO: Call api
 * @param {String} sourceUrl
 * @param {{ method: 'GET' | 'POST', headers: Headers, filter, params, data}} option
 */
export const dataProvider = async (sourceUrl, option) => {
  try {
    option = option || {}
    const headers = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem('procon'),
    }
    const method = option.method || 'GET'
    const options = { headers }
    let filter = ''
    if (option.filter) {
      filter = `?filter=${JSON.stringify(option.filter)}`
    }
    if (option.params) {
      options.params = option.params
    }
    if (method === 'GET') {
      return new Promise((resolve, reject) => {
        axios
          .get(`${BASE_API_URL}${sourceUrl}${filter}`, options)
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            console.log('Error:', err)
            if (err.response) {
              reject(err.response)
            } else {
              reject({ status: 404 })
            }
          })
      })
    } else {
      const data = option.data || {}
      // return  axios.post(BASE_API_URL + sourceUrl, { ...data }, { headers: header })
      return new Promise((resolve, reject) => {
        axios
          .post(`${BASE_API_URL}${sourceUrl}`, { ...data }, { headers })
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            console.log('Error:', err)
            if (err.response) {
              reject(err.response)
            } else {
              reject({ status: 404 })
            }
          })
      })
    }
  } catch (err) {
    console.log('Error:', err)
  }
}
