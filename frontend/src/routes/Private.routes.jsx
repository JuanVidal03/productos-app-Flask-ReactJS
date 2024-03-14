// dependencias
import { Suspense, lazy, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// paginas
const ShowCreateProduct = lazy(() => import('../pages/Products/ShowCreateProduct.jsx'));
const Login = lazy(() => import('../pages/Auth/Login.jsx'));
// contexto para el login
import { GlobalContext } from "../context/GlobalContext.jsx";

const PrivateRoutes = () => {

    const { logIn } = useContext(GlobalContext);

    return (
        <Suspense fallback='Cargando...'>
            <Routes>
                <Route path="/" element={logIn ? <ShowCreateProduct/> : <Navigate to='/login'/>}/>
            </Routes>    
        </Suspense>
    );
}

export default PrivateRoutes;