
import { useContext, useEffect, useState } from "react"
import { UsuarioContexto } from "../Context/UsuarioContexto"
import { BarraNavegacionAdministrador } from "../Components"
import { UsuarioTipo } from "../Model"
import { UsuarioLista } from "../Components"
import { UsuariosLista } from "../api/Usuario/usuariosLista"
import { cambioRolUsuario } from "../api"
import { CanchaCreate } from "../Components/Cancha/CanchaCreate"

export const PaginaAdministrador  = () => {

    const {usuario} = useContext(UsuarioContexto)
    const [cualInterfaz, setCualInterfaz]=useState<string>('listaUsuarios');
    const [usuarios,setUsuarios] = useState<UsuarioTipo[]>([])

    const cambiarInterfaz = (interfaz:string) => {
        setCualInterfaz(interfaz);
    }
    
    const cambioRol= async(id: string,rol:string)=>{
        await cambioRolUsuario(id,rol,usuario.token)

        verUsuarios();
    }

    const verUsuarios= async()=>{
        const lista = await UsuariosLista(usuario.token)
       setUsuarios(lista);
    }

    useEffect(()=>{
        verUsuarios();
    },[])

    return(
        <>  
            <BarraNavegacionAdministrador key={usuario.nombre} nombre={usuario.nombre} cambio={cambiarInterfaz} />
            {cualInterfaz === 'listaUsuarios'?(
                <UsuarioLista key={usuario.id} cambioRol={cambioRol} usuarios={usuarios}/>
            ):(
                <CanchaCreate key={usuario.id} token={usuario.token}/>
            )
            }
        </>
    )
    
}