import { UserRegistro } from "../../Model/UserRegistro";
import { apiUsuario } from "../apisBases/ApiUsuario";

export const Registrar= async(userRegistro:UserRegistro)=>{
    const response = await apiUsuario.post('',
                        JSON.stringify({
                                        nombre:userRegistro.nombreUsuario,
                                        email:userRegistro.email,
                                        contraseña:userRegistro.contraseñaUsuario,
                                        telefono:userRegistro.TelefonoUsuario
                        }),{
                        headers: {'Content-Type' : 'application/json'},
                            withCredentials: true})
    return response.data
}