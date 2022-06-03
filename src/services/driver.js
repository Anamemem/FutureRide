import { parseResponse } from "./mixin"
// import { getProfileAPI, getUsersAPI, updateProfileAPI } from '../api/user'
import { acceptRideAPI, createOrderAPI, getActiveOrderAPI, getOrderAPI, updateOrderAPI } from "../api/driver"
import { getActiveDriverAPI } from "../api/driver"
import { UpdateLocationAPI } from "../api/driver"


function getFilterString(filter) {
  filter = filter || {}

  let filterString = ''
  for (const [key, value] of Object.entries(filter)) {
    if (!value) { continue }
    filterString += `${key}=${value}&`
  }
  return filterString ? `?${filterString.slice(0, -1)}` : filterString

}



export const UpdateLocation = async (data) => {
  const response = await UpdateLocationAPI(data)
  return parseResponse(response)
}


export const getActiveDriver = async (filter) => {
  let filterString = getFilterString(filter)
  const response = await getActiveDriverAPI(filterString)
  return parseResponse(response)
}


export const createOrderService = async (data) => {
  const response = await createOrderAPI(data)
  return parseResponse(response)
}

export const updateOrderService = async (id, data) => {
  const response = await updateOrderAPI(id, data)
  return parseResponse(response)
}

export const acceptRideService = async (id, data) => {
  const response = await acceptRideAPI(id, data)
  return parseResponse(response)
}

export const getOrder = async (filter) => {
  let filterString = getFilterString(filter)
  const response = await getOrderAPI(filterString)
  return parseResponse(response)
}

export const getActiveOrder = async (filter) => {
  const response = await getActiveOrderAPI()
  return parseResponse(response)
}