import axios from "axios"
import { parseError } from "./mixin"
import init from "./config"

const URL = '/auth'

export const clearData = () => {
  storage.clearData()
}

export const loginApi = async (data) => {
  try {
    const response = await axios.post(URL + '/login', data)
    if (response.status === 201) {
      storage.writeData(response.data)
      return storage.getUser()
    }
    parseError(response)
  } catch (e) {
    return parseError(e)
  }
}

export const registerApi = async (data) => {
  try {
    const response = await axios.post(URL + '/signup', data)
    if (response.status === 201) {
      //storage.writeData(response.data)
      //return storage.getUser()
      return true
    }
    parseError(response)
  } catch (e) {
    return parseError(e)
  }
}

export const logoutApi = async () => {

  storage.clearData()
}

export const initApi = (callback) => {
  init()
  const user = storage.getUser()
  storage.setToken()
  return user
}



const storage = {

  path: 'user',

  getToken: function () {
    const data = this.getData()
    return data?.token
  },

  getRefreshToken: function () {
    const data = this.getData()
    return data?.refreshToken
  },

  getUser: function () {
    const data = this.getData()
    if (!data) return data
    const { token, ...user } = data
    return user
  },

  clearData: function () {
    sessionStorage.clear()
    axios.defaults.headers.common['authorization'] = ''
  },

  writeData: function (data) {
    sessionStorage.setItem(this.path, JSON.stringify(data))
    if (data.token) {
      this.setToken(data.token)
    }
  },

  setToken: function () {
    const token = this.getToken()
    const value = token ? `${token}` : ''
    axios.defaults.headers.common['authorization'] = value
  },

  getData: function () {
    return JSON.parse(sessionStorage.getItem(this.path), '{}')
  }
}