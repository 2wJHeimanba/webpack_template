import axios, { AxiosInstance } from "axios"

const http:AxiosInstance = axios.create({
    baseURL:"",
    timeout:10000,
    headers:{}
});

export default http