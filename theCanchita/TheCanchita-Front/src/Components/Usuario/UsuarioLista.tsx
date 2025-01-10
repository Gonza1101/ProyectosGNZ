
import { UsuarioTipo } from "../../Model"
import { UsuarioRow } from "./UsuarioRow"

type listSUsuarioProps = {
    usuarios: UsuarioTipo[],
    cambioRol: (id:string, rol:string)=>void,
}
export const UsuarioLista: React.FC<listSUsuarioProps> = ({usuarios, cambioRol})=>{

    return (
        <>
            <div className="container mt-3" >
                <div className="row">
                    <div className="col-2 text-center bg-light">
                        <p className="h5">Lista Usuarios</p>
                        <p>“Tengo dos problemas para jugar al fútbol. <br/>Uno es la pierna izquierda. <br/>El otro es la pierna derecha”</p>
                        <p className="h6">Roberto Fontanarrosa</p>
                    </div>

                    <div className="col-10 bg-light">
                        <div className="container row">
                            {
                                usuarios.map((usuario)=>(
                                    <UsuarioRow key={usuario.id} usuario={usuario} cambioRol={cambioRol}/> 
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}