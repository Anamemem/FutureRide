import {  parseResponse } from "./mixin"
// import { getProfileAPI, getUsersAPI, updateProfileAPI } from '../api/user'
import { createResourceAPI, getResourceAPI, deleteResourceAPI, getMyResourceAPI } from "../api/resource"





export const createResource = async (data) => {
    const response = await createResourceAPI(data)
    return parseResponse(response)
  }


export const getAllResources = async (filter) => {
  filter = filter || { } 
	
	let filterString = ''
	for (const [key, value] of Object.entries(filter)) {
		if (!value) { continue }
		filterString += `${key}=${value}&`
	}
	filterString = filterString ? `?${filterString.slice(0, -1)}` : filterString

    const response = await getResourceAPI(filterString)
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