import { ReservaFila } from "./ReservaFila"
import React from "react"
import { ReservaTipo } from "../../Model"


type listReservaProps = {
    reservas:ReservaTipo[],
    // verReservas: ()=>void,
    cancelar:(idReserva:string)=>void,
    confirmar:(idReserva:string)=>void,
    rol:string;
}

export const ListadoReserva:React.FC<listReservaProps> =({cancelar,confirmar,reservas,rol})=>{

    return (
        <>
            <div className="container mt-3" >
                <div className="row">
                    <div className="col-sm-2 text-center bg-light">
                        { rol === 'Operador' ? (
                            <>
                                <h4>Reservas Pendiente </h4>
                                <p>“Nunca recibí distinciones a título personal.
                                Para mí el “nosotros” siempre estuvo por encima del “yo”.<br/></p>
                                <h6>René Favaloro</h6>
                                
                            </>
                        ):(
                            <>
                                <h4>Mis Reservas </h4>
                                <p>"Mis sueños son dos;<br/>  Jugar en el Mundial, y salir campeón de Octava"<br/> </p>
                                   <h6>Diego A. Maradona</h6> 
                            </>
                        )
                        }
                    </div>

                    <div className="col-sm-10 bg-light">
                        <div className="container row">
                            {
                                reservas.map((reserva)=>(
                                    <ReservaFila key={reserva.id} reserva={reserva} cancelar={cancelar} confirmar={confirmar} />
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 