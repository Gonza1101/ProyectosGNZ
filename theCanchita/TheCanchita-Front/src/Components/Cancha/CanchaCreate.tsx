import { useContext, useRef, useState } from "react";
import { CrearCancha } from "../../api"
import { BarraNavegacion } from "../NavBar/BarraNavegacion"
import { Cancha } from "../../Model";
import { UsuarioContexto } from "../../Context/UsuarioContexto";
import { useNavigate } from "react-router-dom";




export const CanchaCreate : React.FC<{token:string}> = ( { token } ) => {

    const  navigate  = useNavigate();
    const { usuario } = useContext(UsuarioContexto);
    const [mensaje, setMensaje] = useState<string | null>(null);
    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputDireccionRef = useRef<HTMLInputElement>(null);
    const inputHorarioInicio = useRef<HTMLInputElement>(null);
    const inputHorarioFin = useRef<HTMLInputElement>(null);
    const [estado, setEstado] = useState<string>("Habilitada");


    const handlerBotonCrear = async () => {
        if (!(inputNombreRef.current!.value && inputDireccionRef.current!.value && inputHorarioInicio.current!.value
             && inputHorarioFin.current!.value )) {
            alert("Complete todos los campos");
        }
        else {
            const cancha: Cancha = {
                id              : "",
                nombreCancha    : inputNombreRef.current!.value,
                direccion       : inputDireccionRef.current!.value,
                horarioInicio   : inputHorarioInicio.current!.value,
                horarioFin      : inputHorarioFin.current!.value,
                estado          : estado
            }
            console.log(cancha);
            
            const respuesta = await CrearCancha(cancha, token);
            setMensaje(respuesta);
        }
        
        
    }

    const handleKeyUp= (e : React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handlerBotonCrear();
            
           
        }
    }

    const handleVolver = () =>{
        navigate('/admin')
    }

   return (
        <>
          {/* <BarraNavegacion cambio={handleVolver} key={usuario.id} nombre={usuario.nombre} rol={usuario.rol} /> */}
          <div className="container pt-5 my-5 text-center border">
            <h2>Crear Cancha</h2>
            <form>
              <div className="mb-3 mt-3">
                <label className="form-label">
                  Nombre de la Cancha
                  <input
                    type="text"
                    className="form-control"
                    ref={inputNombreRef}
                    placeholder="Nombre"
                    onKeyUp={handleKeyUp}
                  />
                </label>
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label">
                  Dirección
                  <input
                    type="text"
                    className="form-control"
                    ref={inputDireccionRef}
                    placeholder="Calle Falsa 123"
                    onKeyUp={handleKeyUp}
                  />
                </label>
              </div>
              <div className="mb-3 mt-3">
                        <label className="form-group"> Horario Inicio
                            <input type="time" 
                            className="form-control"
                            ref={inputHorarioInicio}
                            onKeyUp={handleKeyUp}
                            />
                        </label>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-group"> Horario Cierre
                            <input type="time" 
                            className="form-control"
                            ref={inputHorarioFin}
                            onKeyUp={handleKeyUp}
                            />
                        </label>
                    </div>
              <div className="mb-3 mt-3">
                <label className="form-label">
                  Estado
                  <select
                    className="form-control"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  >
                    <option value="Habilitada">Habilitada</option>
                    <option value="Deshabilitada">Deshabilitada</option>
                  </select>
                </label>
              </div>
              <button
                type="button"
                className="btn btn-dark"
                onClick={handlerBotonCrear}
              >
                Crear Cancha
              </button>
            </form>
            {mensaje && <p className="mt-3">{mensaje}</p>}
          </div>
        </>
      );
};