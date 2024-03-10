// dependencias
import { Suspense, lazy } from "react";
// componentes
const FormLogin = lazy(() => import('../../components/Auth/FormLogin.jsx'));

const Login = () => {

    // cambiando el titulo a la paina
    document.title = 'Ingresa! | Juan Vidal';

    return (
        <Suspense fallback='Cargando...'>
            <div className="w-screen h-screen bg-red-500 flex justify-center items-center">
                <FormLogin/>
            </div>
        </Suspense>
    );
}

export default Login;