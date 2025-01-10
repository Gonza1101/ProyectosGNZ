import { apiReserva } from "../apisBases/ApiReserva";

 const LISTA = '/estado/'

export const ReservasPorEstado= async(estado:string, token:string) => {
    const response = await apiReserva.get(LISTA+estado,{
        headers: {
            Authorization: `Bearer `+token
        }
    }
    );
    return response.data;
    }
