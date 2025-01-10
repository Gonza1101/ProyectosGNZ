import { useRef } from "react"
import { UsuarioTipo } from "../../Model"

type UsuarioRowProps= {
    cambioRol:(id:string, rol:string)=>void
    usuario: UsuarioTipo
}
export const UsuarioRow : React.FC<UsuarioRowProps> = ({cambioRol, usuario})=>{

   const inputRolRef = useRef<HTMLSelectElement>(null);

    const handleCambiarRol = ()=>{
        // console.log(inputRolRef.current!.value)
        cambioRol(usuario.id,inputRolRef.current!.value)
    }

    return (
        <> 
            <div className="container-fluid col-3 text-center" >
                <div className="card" style={{width:200, backgroundColor:"#C7C7C7 "}} >
                    <img 
                        key={usuario.id}
                        className="card-img-top" 
                        src={`https://robohash.org/${usuario.id}.png`}
                        // "https://rickandmortyapi.com/api/character/avatar/49.jpeg"
                        alt={usuario.nombre}></img>
                    <div className="card-body">
                        <div>
                            <p className="h5 card-title">{usuario.nombre}</p>
                            <p className="card-text">Email: {usuario.email}</p>
                            <p className="card-text">Telefono: {usuario.telefono}</p>
                            <p className="h5 card-text" style={{color:"#2986cc"}}>{usuario.rol}</p>
                        </div>
                        
                        <div className="mb-1 mt-1">
                            <form>
                                <select
                                ref={inputRolRef}
                                className="form-select form-select-sm-2">
                                    <option>Administrador</option>
                                    <option>Eliminado</option>
                                    <option>Operador</option>
                                    <option>Usuario</option>
                                </select>
                            </form> 
                        </div>
                
                        <div className="btn-group btn-group-sm">
                            <button className="btn btn-success" type="button" onClick={handleCambiarRol}>Asignar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}