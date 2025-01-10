import axios from "axios";

const apiCancha = axios.create({
    baseURL:'http://localhost:8080/cancha',
    withCredentials:true,
})

export {apiCancha}