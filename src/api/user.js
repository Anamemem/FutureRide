import axios from "axios"
import { parseError } from "./mixin"

const URL = '/user'



export const updateProfileAPI = async (data) => {
  try {

    const response = await axios.put(`${URL}`, data )
    if (response.status === 200) {
      return response.data.data
    }
    return parseError(response)
  } catch (error) {
    return parseError(error)
  }
}

export const getProfileAPI = async (user) => {
  try {
    const response = await axios.get(`${URL}`)
    if (response.status === 200) {
      return response.data.data
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}

export const getUsersAPI = async () => {
  try {
    const response = await axios.get('/all/user')
    if (response.status === 200) {
      return response.data.data
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}

