// dependencias
import { Suspense, lazy } from "react"
import { BrowserRouter } from "react-router-dom"
// rutas
const PublicRoutesRoutes = lazy(() => import('./routes/publicRoutes.routes.jsx'))

const App = () => {

  return (
    <BrowserRouter>
      <PublicRoutesRoutes/>
    </BrowserRouter>
  )
}

export default App