import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UsuarioContexto } from "../Context/UsuarioContexto"

export const DistributePage = ()=>{
    const {usuario} = useContext(UsuarioContexto)

    const pagina = usuario.rol === 'Usuario' ? 'canchita' : 
                                                usuario.rol === 'Operador' ? 'operator' : 'admin'
    return(
        <>
            <Outlet/>
            <Navigate to={`/${pagina}`}/>
        </>
    )
}