import { apiReserva } from "../apisBases/ApiReserva";
import { ReservaModel, ReservaTipo } from "../../Model";

export const HacerReserva = async (reserva: ReservaTipo, token: string) => {

    console.log(reserva);
    
    const response = await apiReserva.post(``,JSON.stringify({
        idCancha        :   reserva.idCancha,
        idUsuario       :   reserva.idUsuario,
        inicioReserva   :   reserva.inicioReserva,
        finReserva      :   reserva.finReserva
    }),{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }
)
    
    
    return response.data;
};
