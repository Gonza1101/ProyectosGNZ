import express from "express"
import cors from "cors"
/*
Credenciales Vendedor de Prueba
    Public_Key = 
    Acces_Token = 
*/

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({
     accessToken: '', 
    });

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/",(req, res)=>{
    res.send("I'm Server :)  ")
})

app.post("/create_preference", async(req,res)=>{
    console.log("In POST")
    try{
        const body ={
            items:[
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id:"ARS",
                },
            ],
            back_urls:{
                succes:"",
                failure:"",
                pendig:"",
            },
            auto_return: "approved",
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });
        
        res.json({
            id:result.id
        });

    }catch(error){
        console.log(error)
        res.status(500).json({
            error:"Error al crear la preferancia :("
        })
    };

})

app.listen(port,()=>{
    console.log( `El Servidor esta corriendo en el puerto ${port}` )
})
