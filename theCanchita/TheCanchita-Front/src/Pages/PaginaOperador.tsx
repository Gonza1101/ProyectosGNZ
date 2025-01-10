import { useContext, useEffect, useState } from "react";
import { BarraNavegacion, Canchas,ListadoReserva}  from "../Components";
import { UsuarioContexto } from "../Context/UsuarioContexto";
import { cancelaReserva, listaReservasParaOperador } from "../api";
import { ReservaTipo } from "../Model/ReservaTipo";

export const PaginaOperador = () => {
    
    const {usuario} = useContext(UsuarioContexto)
    const [cualLista, setCualLista]= useState<String>('Reservas');
    // const [estado, setEstado] = useState<String>('Pendiente');
    const [reservas,setReservas] = useState<ReservaTipo[]>([]);
    
    const cambioLista =(nombre:string)=>{
        setCualLista(nombre)
        nombre === 'Reservas' ? verReservas() : ''
    }
  
    const cancelar = async(idReserva:string)=>{
        await cancelaReserva(idReserva,'Cancelada',usuario.token);
        verReservas();
    }
    
    const verReservas = async () => {
        const listaReserva:ReservaTipo[]= await listaReservasParaOperador(usuario.token);
        setReservas(listaReserva)
    }

    const confirmar = async(idReserva:string)=>{
        await cancelaReserva(idReserva,'Reservada',usuario.token);
        verReservas();
    }

    useEffect(()=>{
        verReservas();
    },[])

    return(
        <>
           <BarraNavegacion cambio={cambioLista}nombre={usuario.nombre} rol={usuario.rol}/>
            { cualLista === 'Reservas' ?  (
                <ListadoReserva key={usuario.id} reservas={reservas} cancelar={cancelar} confirmar={confirmar} rol={usuario.rol}/>
            ) : (
                <Canchas token={usuario.token}/>
            )}
        </>
    )
}