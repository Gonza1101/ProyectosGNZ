import { apiUsuario } from "../apisBases/ApiUsuario"

export const UsuariosLista = async( token:string)=>{
    const response = await apiUsuario.get('',{
        headers: {
            Authorization: `Bearer `+token
        }
    });
    return response.data
}