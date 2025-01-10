import { apiCancha } from "../apisBases/ApiCancha";
import { Cancha } from "../../Model";


export const TraerCancha = async(idCancha:String, token:String) => {
    const response = await apiCancha.get(`/id/${idCancha}`,{
        headers: {
            Authorization: `Bearer ${token}` 
        }
    });

    const cancha: Cancha = {
        id              : response.data.id,
        nombreCancha    : response.data.nombreCancha,
        direccion       : response.data.direccion,
        estado          : response.data.estado,
        horarioInicio   : response.data.horarioInicio,
        horarioFin      : response.data.horarioFin
    };

    return cancha;
};