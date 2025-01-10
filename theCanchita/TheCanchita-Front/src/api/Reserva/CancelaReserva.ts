import { apiReserva } from "../apisBases/ApiReserva";

 const ESTADO = 'estado'

export const cancelaReserva= async(idReserva:string, nuevoEstado:string,token:string) => {

    const response = await apiReserva.put(`${idReserva}/${ESTADO}/${nuevoEstado}`,{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    return response.data
    }