import { useContext, useEffect, useState } from "react";
import { UsuarioContexto } from "../../Context/UsuarioContexto";

type navBarProps = { 
    cambio: (lista: string) => void, 
    nombre: string,
    rol: string,
}

export const BarraNavegacion: React.FC<navBarProps> = ({ cambio, nombre, rol }) => {
    const {setUsuario} = useContext(UsuarioContexto);
    const [fondoUser, setfondoUser] = useState<string>('#ace1e9')

    const handlerCanchas = () => {
        cambio('Canchas');
    };
    const handlerReservas = () => {
        cambio('Reservas');
    };
    const handlerlogout = ()=>{
        setUsuario({id:'',nombre:'', rol:'', token:'',email:'',telefono:'',codigoRespuesta:0,cantidadReservas:0});
    }

    useEffect(()=>{
        rol === 'Usuario' ? (setfondoUser('#ace1e9'))  : (setfondoUser('#8e7cc3')) 
    })
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light" style={{background: fondoUser}}>
                <div className="container ">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_River_Plate.png" alt="RiverPlate" width="30" height="24"/>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            {rol === 'Usuario' ? (
                                <>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handlerReservas}>Mis Reservas</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handlerCanchas}>Canchas</button>
                                    </li>
                                </>
                            ):(
                                <>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handlerReservas}>Lista Pendiente</button>
                                    </li>
                                    <li className="nav-item">
                                        <button className="nav-link btn" onClick={handlerCanchas}>Canchas</button>
                                    </li>
                                </> 
                            )}
                        </ul>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-end align-items-center">
                    <span className="navbar-text me-2">{nombre}</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Escudo_de_Racing_Club_%282014%29.svg" alt="RacingClub" width="30" height="24"/>
                    <button className="nav-link btn ms-2" onClick={handlerlogout}>Cerrar Sesion</button>
                </div>
            </nav>
        </>
        
        
    );
};
