/*
Credenciales Vendedor de Prueba
    Public_Key = 
    Acces_Token = 
*/
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios"
import { useState } from 'react';

const Product = ()=>{
    const [preferenceId, setPreferenceId] = useState(null);
    //Public_Key
    initMercadoPago('',{
        locale: "es-AR",

    });

    const createPreference = async()=>{
        try{
            const response = await axios.post("http://localhost:3000/create_preference",{
                title: "Presto Pronta",
                quantity: 1,
                price:10,
            });
            const {id}=response.data;
            console.log(response)
            return id;
        }catch(error){
            console.log(error);
        }
    }
    const handleBuy = async()=>{
        const id = await createPreference();
        if (id){
            setPreferenceId(id);
        }
    }
    return(
        <>
            <section>
            <div className="container mt-3 ">
                <div className="row">
                    <div className="col">
                        <img className="" src="/Img/almacen_libre.svg" alt="Card image" style={{width:75}}/>
                    </div>
                    <div className="col">
                    <h4 className="card-title">Almacen Libre</h4>
                    </div>

                </div>
            </div>
            </section>

            <section id='Producto'>
                <div className="container mt-3 text-center">

                    <div className="card" style={{width:300}}>
                        <div className="text-Center">
                            <img className="card-img-top" src="/Img/Polenta.jpg" alt="Card image" style={{width:300}}/>
                        </div>

                        <div className="card-body">
                            <h4 className="card-title" >Presto Pronta</h4>
                            <p className="card-text">$ 10</p>
                            <p className="card-text">1</p>
                            <div id="wallet_container"> {/* Segun la Documentacion me pide poner el boton en un contenedor con ese id */}
                                <a id="" href="#" className="btn btn-primary"
                                            onClick={handleBuy}>
                                    Comprar
                                </a>
                                { preferenceId === null ? (
                                    <>
                                    </>
                                ):(
                                    <>
                                    <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} /> {/*Se genera el boton de mercado pago para efectuar el pago.*/}
                                    </>
                                )}
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Product