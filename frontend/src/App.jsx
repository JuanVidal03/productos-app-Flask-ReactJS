// dependencias
import { Suspense, lazy } from "react"
import { BrowserRouter } from "react-router-dom"
// rutas
const PrivateRoutes = lazy(() => import('./routes/Private.routes.jsx'));
const PublicRoutes = lazy(() => import('./routes/Public.routes.jsx'));
// contexto
const GlobalContext = lazy(() => import('./context/GlobalContext.jsx'));

const App = () => {

  return (
    <Suspense fallback='Cargando...'>

      {/* contexto */}
      <GlobalContext>
        {/* enrutado */}
        <BrowserRouter>
          <PublicRoutes/>
          <PrivateRoutes/>
        </BrowserRouter>
      </GlobalContext>
    </Suspense>
  )
}

export default App