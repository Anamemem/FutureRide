import axios from "axios"
import { parseError } from "./mixin"

const URL = '/order'



export const createResourceAPI = async (data) => {
  try {

    const response = await axios.post(`${URL}/create`, data )
    if (response.status === 201) {
      return response.data
    }
    return parseError(response)
  } catch (error) {
    return parseError(error)
  }
}

export const getActiveDriverAPI = async (filterString) => {
  try {
    const response = await axios.get(`${URL}/driver/active${filterString}`)
    if (response.status === 200) {
      return response.data.data || response.data.message
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}
export const UpdateLocationAPI = async (data) => {
  try {
    const response = await axios.put(`${URL}/driver/active`,data)
    if (response.status === 200) {
      return response.data.data || response.data.message
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}


export const getMyResourceAPI = async (user) => {
  try {
    const response = await axios.get(`${URL}/user`)
    if (response.status === 200) {
      return response.data.data
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}

export const deleteResourceAPI = async (id) => {
  try {
    const response = await axios.delete(`${URL}/${id}`)
    if (response.status === 200) {
      return response.data
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}

