import { RouterProvider} from 'react-router-dom';
import { AppRouter } from './Router';
import { UsuarioProveedor } from './Context/UsuarioProveedor';

function App() {
  return(
    <>
      <UsuarioProveedor>
        <RouterProvider router={AppRouter}>
        </RouterProvider>
      </UsuarioProveedor>
    </>
  )
}

export default App
