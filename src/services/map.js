import { autoCompleteApi, getRouteApi, reverseGeocoderApi } from "../api/map"
import { parseResponse } from "./mixin"


export const reverseGeocoderService = async (data) => {
  const response = await reverseGeocoderApi(data.lat,data.lng)
  return parseResponse(response)
}

export const autoCompleteService = async (text) => {
  const response = await autoCompleteApi(text)
  return parseResponse(response)
}

export const getRouteService = async (pickup,destination) => {
  const response = await getRouteApi(`${pickup.lat},${pickup.lng}`,`${destination.lat},${destination.lng}`)
  return parseResponse(response)
}