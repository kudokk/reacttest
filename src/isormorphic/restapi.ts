import axios from 'axios'

const restApiUrl = 'https://api.gnavi.co.jp/RestSearchAPI/v3/'

const ax = axios.create({
  timeout: 50000,
  headers: {},
})

export const axiosGet = (page: number) => {
  return ax
    .get(`${restApiUrl}?keyid=9a33e2fbbf4761bdad0ce3b6afbe7a38&areacode_m=AREAM2105&offset_page=${page}`)
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      console.log(e)
    }) 
}

export const getapi = async (page: number) => {
  const data =  await axiosGet(page)
  console.log('data')
  console.log(data.rest)
  return data.rest
}