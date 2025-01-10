import axios from "axios";

const apiReserva = axios.create({
    baseURL:'http://localhost:8080/reserva',
    withCredentials:true,
})

export {apiReserva}