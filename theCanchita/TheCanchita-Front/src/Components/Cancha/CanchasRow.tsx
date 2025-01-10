import React, { useContext } from "react"
import { Cancha } from "../../Model/Cancha"

import { useNavigate } from "react-router-dom";
import { UsuarioContexto } from "../../Context/UsuarioContexto";

type canchaProps = {
    cancha : Cancha
}

export const CanchasRow: React.FC<canchaProps>= ( { cancha } ) => {
    const { usuario } = useContext(UsuarioContexto);
    const navigate = useNavigate();

    const handleReserva =() =>{
        navigate(`/reservar/${cancha.id}`);
        
        console.log(usuario.cantidadReservas);
        
    }

    return (
        <>  
    

<div className="col-sm-2 mb-4">
            <div className="card" style={{width: '100%', backgroundColor: '#C7C7C7'}}>
                <img className="card-img-top" src="/Images/cancha.jpg" alt="Imagen De Cancha" />
                <div className="card-body">
                    <h4 className="card-title">{cancha.nombreCancha}</h4>
                    <p className="card-text">{cancha.direccion}</p>
                    <p className="card-text">Desde: {cancha.horarioInicio.slice(0,5)}hs Hasta {cancha.horarioFin.slice(0,5)} </p>
                    {usuario.cantidadReservas === 3 ? "Máximo de reservas hechas" :
                        <button type="button" className="btn btn-primary mt-3" onClick={handleReserva}>Reservar</button>
                    }
                </div> 
            </div> 
        </div>
    

        </>
        

        
    )

}

