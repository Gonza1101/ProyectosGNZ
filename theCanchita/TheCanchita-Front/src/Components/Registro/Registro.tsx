import { useRef } from "react"
import { UserRegistro } from "../../Model/UserRegistro";
import { Link, useNavigate } from "react-router-dom";
import { Registrar } from "../../api";

export const Registro =()=>{

    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputTelefonoRef = useRef<HTMLInputElement>(null);
    const inputContraseñaRef = useRef<HTMLInputElement>(null);
    const navigate =useNavigate();

    const handlerBotonRegistro = ()=>{
        (inputNombreRef.current!.value &&
        inputContraseñaRef.current!.value &&
        inputEmailRef.current!.value &&
        inputTelefonoRef.current!.value) === '' ?
            (alert("Por favor, complete TODOS los campos") ):
            (sendRegistro())
    };

    const sendRegistro = ()=>{
        const userRegistro:UserRegistro = {
            nombreUsuario:inputNombreRef.current!.value,
            email:inputEmailRef.current!.value,
            TelefonoUsuario:inputTelefonoRef.current!.value,
            contraseñaUsuario:inputContraseñaRef.current!.value,
        }
        Registrar(userRegistro)
        alert("Gracias, "+userRegistro.nombreUsuario+", por Registrarse.")
        navigate('/')
    };

    const handleKeyUp = (e : React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (inputNombreRef.current!.value && inputContraseñaRef.current!.value && inputEmailRef.current!.value
                && inputTelefonoRef.current!.value) {
              handlerBotonRegistro();
            } else {
              alert("Por favor, complete TODOS los campos");
            }
          }
        };
    
    return(
        <>
            <section>
                <div className="container pt-5 my-5 text-center border">
                    <h2>Registrame en <br></br>The Canchita Club</h2>
                    <form >
                        <div className="mb-3 mt-3">
                            <label className="form-label">Nombre
                            <input
                                ref={inputNombreRef}
                                className="form-control" 
                                type="text" 
                                placeholder="Nombre" 
                                onKeyUp={handleKeyUp}
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Ingrese su Mail
                            <input
                                ref={inputEmailRef}
                                className="form-control" 
                                type="text" 
                                placeholder="ejemplo@gmail.com"
                                onKeyUp={handleKeyUp}
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Telefono
                            <input
                                ref={inputTelefonoRef}
                                className="form-control"
                                type="tel"
                                placeholder=" 2243 mmm mmm"
                                onKeyUp={handleKeyUp}
                            /></label>
                        </div>
                        <div className="mb-3 mt-3">
                            <label className="form-label">Contraseña
                            <input
                            ref={inputContraseñaRef}
                            className="form-control"
                            type="password"
                            placeholder="********" 
                            onKeyUp={handleKeyUp}
                            /></label>
                        </div>
                        <button
                            type="button" 
                            className="btn btn-dark"
                            onClick={handlerBotonRegistro}>
                        Registrarme
                        </button>
                    </form>
                    <p><Link className="link-opacity-50-hover" to='/'>Ya Estoy Registrado</Link></p>
                </div>
            </section>
        </>
    )
}