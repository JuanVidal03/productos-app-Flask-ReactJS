// dependecias
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// servicios de la api
import { logInAccess } from "../../services/usersApi.js";

const FormLogin = () => {
    // redirecion cuando ingrese a la aplicacion
    const navigate = useNavigate();

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');

    const ingresarAplicacion = () => {
        const credenciales = {
            mail,
            pass
        }
        navigate('/')
        console.log(credenciales)
    }

    return (
        <div className="bg-white p-8 rounded">
            <h3 className="text-center text-3xl font-bold uppercase">Ingresa!</h3>
            <form className=" flex flex-col gap-4 justify-center items-center w-[300px] h-[300px]">
                <input onChange={(e) => setMail(e.target.value)} className="w-full p-4 bg-slate-200" type="text" placeholder="Correo electronico"/>
                <input onChange={(e) => setPass(e.target.value)} className="w-full p-4 bg-slate-200" type="password" placeholder="Contraseña"/>
                <input onClick={ingresarAplicacion} className="w-full bg-black text-white py-4 uppercase font-bold cursor-pointer" type="button" value='Ingresar'/>
            </form>
        </div>
    );
}

export default FormLogin;
