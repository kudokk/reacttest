import axios from 'axios'

const restApiUrl = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=9a33e2fbbf4761bdad0ce3b6afbe7a38&areacode_m=AREAM2105'

const axiosGet = () => {
  return axios
    .get(restApiUrl)
    .then((res) => {
      return res.data
    })
}

export const getapi = async () => {
  return await axiosGet()
}