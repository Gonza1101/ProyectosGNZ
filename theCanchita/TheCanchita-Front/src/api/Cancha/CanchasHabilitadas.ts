
import { Cancha } from "../../Model/Cancha";
import { apiCancha } from "../apisBases/ApiCancha";

export const CanchasHabilitadas = async(token:string) => {
    const response = await apiCancha.get('', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    const canchaDatos:Cancha[] = response.data.map((cancha: Cancha) => ({
        id:cancha.id,
        nombreCancha:cancha.nombreCancha,
        direccion:cancha.direccion,
        horarioInicio:cancha.horarioInicio,
        horarioFin:cancha.horarioFin,
        estado:cancha.estado
    }));
    return canchaDatos
}