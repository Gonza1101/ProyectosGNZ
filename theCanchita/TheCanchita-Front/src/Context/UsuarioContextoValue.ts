import { UsuarioTipo } from "../Model/UsuarioTipo"
export type UsuarioContextoValue = {
    usuario:UsuarioTipo,
    
    setUsuario:(usuarioNuevo:UsuarioTipo)=>void,
}