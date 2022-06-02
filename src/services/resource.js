import {  parseResponse } from "./mixin"
// import { getProfileAPI, getUsersAPI, updateProfileAPI } from '../api/user'
import {  deleteResourceAPI, getMyResourceAPI } from "../api/driver"
import { getActiveDriverAPI } from "../api/driver"
import { UpdateLocationAPI } from "../api/driver"





export const UpdateLocation = async (data) => {
    const response = await UpdateLocationAPI(data)
    return parseResponse(response)
  }


export const getActiveDriver = async (filter) => {
  filter = filter || { } 
	
	let filterString = ''
	for (const [key, value] of Object.entries(filter)) {
		if (!value) { continue }
		filterString += `${key}=${value}&`
	}
	filterString = filterString ? `?${filterString.slice(0, -1)}` : filterString

    const response = await getActiveDriverAPI(filterString)
    return parseResponse(response)
  }


export const getMyResources = async () => {
    const response = await getMyResourceAPI()
    return parseResponse(response)
  }

  export const deleteResource = async (_id) => {
    const response = await deleteResourceAPI(_id)
    return parseResponse(response)
  }