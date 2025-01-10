import { apiReserva } from "../apisBases/ApiReserva"
 const LISTA = '/pendienteandreservada'

export const listaReservasParaOperador = async(token:string)=>{
    const response = await apiReserva.get(LISTA,{
    headers: {
        Authorization: `Bearer `+token
    }
}
);
return response.data
}