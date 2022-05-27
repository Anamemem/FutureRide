import axios from "axios"
import { parseError } from "./mixin"

const URL = '/category'


export const getCategoryAPI = async (cache = true) => {

  const localData = localStorage.getItem('categoryData')
  if (localData) {
    const catData = JSON.parse(localData)
    if (catData && cache) {
      return catData
    }
  }

  try {
    const response = await axios.get(`${URL}`)
    if (response.status === 200) {
      localStorage.setItem('categoryData', JSON.stringify(response.data.data))

      return response.data.data
    }
    return parseError(response)
  } catch (error) {
    return parseError(error)
  }
}