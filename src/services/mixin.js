export const storage = {

  clearData: function () {
    sessionStorage.clear()
  },




  writeData: function (data, prefix) {
    console.log('writting data')
    sessionStorage.setItem(prefix, JSON.stringify(data))
  },

  getData: function (prefix) {
    return JSON.parse(sessionStorage.getItem(prefix)?? '{}')
  }
}


export const parseResponse = (data) => {
  if (data?.error) {
    throw new Error(data?.error?.error ?? data?.error?.message)
  }
  return data
}


export function parseFormData(data) {
  const form = new FormData()
  Object.keys(data).forEach(element => {
    form.append(element, data[element])
  });
  return form
}