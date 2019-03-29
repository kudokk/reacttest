import axios from 'axios'

const restApiUrl = 'https://api.gnavi.co.jp/RestSearchAPI/v3/'

const ax = axios.create({
  timeout: 50000,
  headers: {},
  params: {
    keyid: '9a33e2fbbf4761bdad0ce3b6afbe7a38',
    areacode_m: 'AREAM2105'
  },
})

export const axiosGet = () => {
  return ax
    .get(restApiUrl)
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .catch((e) => {
      console.log(e)
    }) 
}

export const getapi = async () => {
  const data =  await axiosGet()
  console.log('data')
  console.log(data.rest)
  return data.rest
}