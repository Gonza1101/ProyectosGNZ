import axios from "axios";

const apiUsuario = axios.create({
    baseURL: 'http://localhost:8080/usuarios',
    withCredentials:true,
    headers:{'Content-Type' : 'application/json'}
});

const webHook = axios.create({
    baseURL:'https://webhook.site/5c3a20ba-dcdc-4300-8000-3785579e42d9',
})

export {webHook,apiUsuario}