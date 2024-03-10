// dependencias
import axios from "axios";

const urlBase = "http://127.0.0.1:8080";

// login
export const logInAccess = async() => {
    try{

        const result = await axios.get(`${urlBase}/login`);
        return result

    }catch(error){
        console.log(error)
        return error
    }
}