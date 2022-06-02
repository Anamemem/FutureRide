import axios from 'axios'
import { parseError } from './mixin'

// const GEO_CODE_API = "https://geocode.maps.co"
const GEO_CODE_API = "https://api.geoapify.com/v1/geocode"

const http = axios.create({
  withCredentials:false,
  // headers:{"Access-Control-Request-Headers":""}
})

export async function reverseGeocoderApi(lat, long) {
  try {
    const response = await http.get(`${GEO_CODE_API}/reverse?lat=${lat}&lon=${long}&apiKey=b454783ca7564e2d8f018315abda1af7`)
    if (response.status === 200) {
      console.log(response.data)
      return response.data
    }
    return parseError(response)
  } catch (error) {
    return parseError(error)
  }

}

export async function autoCompleteApi(text) {
  try {
    const response = await http.get(`${GEO_CODE_API}/autocomplete?text=${text}&filter=countrycode:ng&apiKey=b454783ca7564e2d8f018315abda1af7`)
    if (response.status === 200) {
      console.log(response.data)
      return response.data
    }
    return parseError(response)
  } catch (error) {
    return parseError(error)
  }

}