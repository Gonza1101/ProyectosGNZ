import { apiCancha } from "../apisBases/ApiCancha";
import { Cancha } from "../../Model";


export const CrearCancha = async(cancha:Cancha, token:string) => {
    const response = await apiCancha.post('', JSON.stringify({
                                              nombreCancha  : cancha.nombreCancha,
                                              direccion     : cancha.direccion,
                                              horarioInicio : cancha.horarioInicio,
                                              horarioFin    : cancha.horarioFin,
                                              estado        : cancha.estado }),{
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Authorization: `Bearer ${token}`
                                                }
                                            }
                                        )

        return response.data
                                            

}