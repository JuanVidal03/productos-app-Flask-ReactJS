// dependencias
import axios from "axios";

const urlBase = "http://127.0.0.1:8080";

// login
export const logInAccess = async(credenciales) => {
    try{

        const result = await axios.post(`${urlBase}/login`, credenciales);
        return result;

    }catch(error){
        return error
    }
}