import axios from "axios"
import { parseError } from "./mixin"

const URL = '/order'



export const createOrderAPI = async (data) => {
  try {

    const response = await axios.post(`${URL}`, data )
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
export const updateOrderAPI = async (id,data) => {
  try {
    const response = await axios.put(`${URL}/${id}`,data)
    if (response.status === 200) {
      return response.data.data || response.data.message
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}

export const getOrderAPI = async (filter) => {
  try {
    const response = await axios.get(`${URL}${filter}`)
    if (response.status === 200) {
      return response.data.data
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}

export const getActiveOrderAPI = async () => {
  try {
    const response = await axios.get(`${URL}/active`)
    if (response.status === 200) {
      return response.data.data
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}

export const acceptRideAPI = async (id,data) => {
  try {
    const response = await axios.put(`${URL}/accept/${id}`,data)
    if (response.status === 200) {
      return response.data
    }
    return parseError(response)
  } catch (error) {
    console.log(error)
    return parseError(error)
  }
}

