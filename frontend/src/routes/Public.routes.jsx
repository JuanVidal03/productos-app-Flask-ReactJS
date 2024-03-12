// dependencias
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// paginas
const Login = lazy(() => import('../pages/Auth/Login.jsx'));


const PublicRoutes = () => {
    return (
        <Suspense fallback='Cargando...'>
            <Routes>
                <Route path="/login" Component={Login}/>
            </Routes>
        </Suspense>
    );
}

export default PublicRoutes;