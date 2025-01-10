import { useState } from "react"
import { UsuarioContexto } from "./UsuarioContexto";
import { UsuarioTipo } from "../Model/UsuarioTipo";

export const UsuarioProveedor:React.FC<React.PropsWithChildren> = ({children})=>{
    const[ctxUsuario,setCtxUsuario] = useState<UsuarioTipo>({id:'',nombre:'', rol:'', token:'',email:'',telefono:'',cantidadReservas:0, codigoRespuesta:0});
    
    const actualizarUsuario =(usuario:UsuarioTipo)=>{
        setCtxUsuario(usuario)
    };
    
    return(
        <>
            <UsuarioContexto.Provider value={{usuario:ctxUsuario,setUsuario:actualizarUsuario}}>
                {children}
            </UsuarioContexto.Provider>
        </>
    )
}