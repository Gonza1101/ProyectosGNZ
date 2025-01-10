import { apiUsuario } from "../apisBases/ApiUsuario"


export const cambioRolUsuario = async(id:string,rol:string,token : string)=>{
    const response  = await apiUsuario.put('/'+id+'/rol/'+rol,{},{
        headers: {
            Authorization: `Bearer `+token
        }
    })
    // return response.status
}