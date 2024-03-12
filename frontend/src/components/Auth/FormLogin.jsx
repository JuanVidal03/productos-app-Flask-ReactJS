// dependecias
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// servicios de la api
import { logInAccess } from "../../services/usersApi.js";
// librerias
import { toast, ToastContainer } from "react-toastify";
// contexto para el login
import { GlobalContext } from "../../context/GlobalContext.jsx";


const FormLogin = () => {
    // redirecion cuando ingrese a la aplicacion
    const navigate = useNavigate();

    // datos de los inputs
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    // contexto para manejar el login
    const { setLogIn } = useContext(GlobalContext);

    // llamado al endpoint para ingresar a la aplicacion
    const ingresarAplicacion = async() => {
        // esquema credenciales
        const credenciales = {
            mail,
            password
        }
        // validando si las credenciales son correctas
        const result = await logInAccess(credenciales);
        if (result.status == 202) {
            setLogIn(true);
            navigate('/');
        } else {
            toast.error('Las credenciales son incorrectas!');
        }
    }

    return (
        <div className="bg-white p-8 rounded">
            <h3 className="text-center text-3xl font-bold uppercase">Ingresa!</h3>
            <form className=" flex flex-col gap-4 justify-center items-center w-[300px] h-[300px]">
                <input onChange={(e) => setMail(e.target.value)} className="w-full p-4 bg-slate-200" type="text" placeholder="Correo electronico"/>
                <input onChange={(e) => setPassword(e.target.value)} className="w-full p-4 bg-slate-200" type="password" placeholder="Contraseña"/>
                <input onClick={ingresarAplicacion} className="w-full bg-black text-white py-4 uppercase font-bold cursor-pointer" type="button" value='Ingresar'/>
            </form>
            <ToastContainer/>
        </div>
    );
}

export default FormLogin;