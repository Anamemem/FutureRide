import axios from "axios";

// export const SERVER_URL = 'https://future-ride.herokuapp.com/'
export const SERVER_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/' : 'https://future-ride.herokuapp.com/'

export default function init() {
  axios.defaults.baseURL = SERVER_URL
  axios.defaults.withCredentials = false
}
