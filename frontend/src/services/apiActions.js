// importar axios
import axios from "axios"
// url base
const urlBase = 'http://127.0.0.1:8080';

// todos los productos
export const allProducts = async() => {
    try {
        const productos = await axios.get(`${urlBase}/productos`);
        return productos;

    } catch (error) {
        console.log(error)
    }
}

// crear producto
export const createProduct = async(product) => {
    try {
        const result = await axios.post(`${urlBase}/productos`, product);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error)
    }
}