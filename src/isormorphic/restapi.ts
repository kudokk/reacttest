import axios from 'axios'

const restApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=japan'

const ax = axios.create({
  timeout: 50000,
  headers: {},
})

const axiosGet = () => {
  return ax
    .get(restApiUrl)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(e)
    }) 
}

export const getapi = async () => {
  return await axiosGet()
}