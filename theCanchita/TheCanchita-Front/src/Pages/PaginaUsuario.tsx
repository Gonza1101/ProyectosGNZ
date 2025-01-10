import { useContext, useEffect, useState} from "react"
import { ListadoReserva } from "../Components/Reservas/ListadoReserva";
import { Canchas, BarraNavegacion } from "../Components";
import { UsuarioContexto } from "../Context/UsuarioContexto";
import { cancelaReserva, listaReservas} from "../api";
import { ReservaTipo } from "../Model";

export const PaginaUsuario = () =>{
    const {usuario} = useContext(UsuarioContexto);
    const [cualLista, setCualLista]=useState<string>('Reservas');
    const [reservas, setReservas] = useState<ReservaTipo[]>([])

    const verReservas = async()=>{
        const reservas = await listaReservas(usuario.email, usuario.token);
        setReservas(reservas)
    }
    const cambioLista =(nombre:string)=>{
        setCualLista(nombre)
        nombre === 'Reservas' ? verReservas() : ''
    }

    const cancelar = async(idReserva:string)=>{
        await cancelaReserva(idReserva,'Cancelada',usuario.token);
        setCualLista('Reservas')
        verReservas()
    }
    const confirmar = ()=>{
        console.log("ERROR SE APRETO EL BOTON CONFIRMAR EN USUARIO")
    }

    useEffect(()=>{
        verReservas();
    },[])

    return(
        <>
            <BarraNavegacion cambio={cambioLista} nombre={usuario.nombre} rol={usuario.rol} />
            { cualLista === 'Reservas' ?  (
                <ListadoReserva key={usuario.id} reservas={reservas} cancelar={cancelar} confirmar={confirmar} rol={usuario.rol}  />
            ) : (
                <Canchas key={usuario.id} token={usuario.token}/>
            )}
        </>
    )
}