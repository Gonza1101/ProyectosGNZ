import { Link, useRouteError } from "react-router-dom"

export const PageError =()=>{
    const error = useRouteError();
    console.error(error);

return(
        <>
            <div id="error-page">
                <div className="container text-center mt-4">
                    <iframe src="https://giphy.com/embed/5ftsmLIqktHQA" width="50%" height="50%" ></iframe>
                </div>
                <div className="container text-center mt-4">
                    <h3>"Estamos Mal, pero vamos Bien"</h3>
                    
                    <p><Link className="link-opacity-50-hover" to='/'>inicio</Link></p>
                </div>
            </div>
        </>
    )
}