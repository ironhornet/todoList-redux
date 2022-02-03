import axios, { AxiosInstance } from "axios";


const axiosRequest: AxiosInstance = axios.create({
    baseURL: "http://localhost:3004"
})

export default axiosRequest