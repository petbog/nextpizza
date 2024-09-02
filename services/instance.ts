import axios from 'axios'



export const axiosInstance = axios.create({
    //NEXT_PUBLIC этот префикс обязателен
    baseURL: process.env.NEXT_PUBLIC_API_URL
})