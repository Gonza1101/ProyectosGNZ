import React, { useContext } from "react"
import { ReservaTipo } from "../../Model/ReservaTipo"
import { UsuarioContexto } from "../../Context/UsuarioContexto"

type reservaProps ={
    reserva: ReservaTipo,
    cancelar:(idReserva:string, estado:string)=>void,
    confirmar:(idReserva:string, estado:string)=>void,
}
export const ReservaFila:React.FC<reservaProps> = ({reserva,cancelar, confirmar})=>{

    const{usuario}= useContext(UsuarioContexto)
    const handleCancelar=()=>{
        cancelar(reserva.id, "Cancelada");
        usuario.cantidadReservas = usuario.cantidadReservas - 1
    }
    const handleConfirmar=()=>{
        confirmar(reserva.id,"Reservada");
    }
    return (
        <>
            <div className="container col-3 text-center" >
                <div className="card" style={{width:200, backgroundColor:"#C7C7C7 "}} >
                    <img className="card-img-top" src="/Images/Potrero_1.jpg"  alt="Imagen De Cancha"></img>
                    <div className="card-body">
                        <h4 className="card-title">{reserva.nombreCancha}</h4>
                        <p className="card-text">Desde: {reserva.inicioReserva.slice(0,5)}hs hasta:{reserva.finReserva.slice(0,5)}hs</p>

                        {usuario.rol ==='Operador' ? (<p className=" card-text">Usuario: {reserva.nombreUsuario}</p>):('')
                        }
                        { reserva.estadoreserva === 'Pendiente' ?(
                            <h4 className="card-text" style={{color:"#2986cc"}}>{reserva.estadoreserva}</h4>
                        ):(
                            <h4 className="card-text"style={{color:"green"}}>{reserva.estadoreserva}</h4>
                        )}
                        <div className="btn-group btn-group-sm">
                        {usuario.rol ==='Operador' ? (
                            reserva.estadoreserva === 'Pendiente' ?
                            <button className="btn btn-success" type="button" onClick={handleConfirmar}>Confirmar</button>: ''
                        ):('')}
                            <button className="btn btn-danger " type="button" onClick={handleCancelar}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}