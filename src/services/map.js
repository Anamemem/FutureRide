import { autoCompleteApi, reverseGeocoderApi } from "../api/map"
import { parseResponse } from "./mixin"


export const reverseGeocoderService = async (data) => {
  const response = await reverseGeocoderApi(data.lat,data.lng)
  return parseResponse(response)
}

export const autoCompleteService = async (text) => {
  const response = await autoCompleteApi(text)
  return parseResponse(response)
}