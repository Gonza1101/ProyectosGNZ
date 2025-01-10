import { apiReserva } from "../apisBases/ApiReserva";

 const LISTA = '/email/'

export const listaReservas= async(email:string, token:string) => {
    const response = await apiReserva.get(LISTA+email,{
        headers: {
            Authorization: `Bearer `+token
        }
    }
    );
    return response.data;
    }
