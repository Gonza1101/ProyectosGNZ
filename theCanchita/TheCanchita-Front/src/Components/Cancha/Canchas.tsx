import { useEffect, useState } from "react";
import { CanchasHabilitadas } from "../../api/Cancha/CanchasHabilitadas";
import { Cancha } from "../../Model/Cancha";
import { CanchasRow } from "./CanchasRow";

export const Canchas : React.FC<{token:string}>= ( { token } ) => {
    const [canchas, setCanchas] = useState<Cancha[]>([]);
    useEffect(() => {
        const fetchCanchas = async () => {
        
        const canchas = await CanchasHabilitadas(token);
        setCanchas(canchas);
        };
        fetchCanchas();
    }, []);

    return ( 
        <div className="container-fluid mt-1 text-center" >
            <h1>Canchas Habilitadas</h1>
                <div className="row">
                    
                {canchas.map((cancha) => (
                        <CanchasRow cancha={cancha} />
                    ))}
                </div>
        </div>
    );
};
