import axios from "axios";

const axiosRequest = axios.create({
    baseURL: "http://localhost:3004"
})

export default axiosRequest