// dependencias
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// paginas
const ShowCreateProduct = lazy(() => import('../pages/Products/ShowCreateProduct.jsx'));
const Login = lazy(() => import('../pages/Auth/Login.jsx'));
// contexto
const GlobalContext = lazy(() => import('../context/GlobalContext.jsx'));


const PublicRoutesRoutes = () => {

    return (
        <Suspense fallback='Cargando...'>
            <GlobalContext>
                <Routes>
                    <Route path="/" Component={ShowCreateProduct}/>
                    <Route path="/productos" Component={ShowCreateProduct}/>
                    <Route path="/login" Component={Login}/>
                </Routes>
            </GlobalContext>
        </Suspense>
    );
}

export default PublicRoutesRoutes;
