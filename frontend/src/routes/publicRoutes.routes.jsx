// dependencias
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// paginas
const ShowCreateProduct = lazy(() => import('../pages/Products/ShowCreateProduct.jsx'));


const PublicRoutesRoutes = () => {
    return (
        <Suspense fallback='Cargando...'>
            <Routes>
                <Route path="/" Component={ShowCreateProduct}/>
                <Route path="/productos" Component={ShowCreateProduct}/>

            </Routes>
        </Suspense>
    );
}

export default PublicRoutesRoutes;
