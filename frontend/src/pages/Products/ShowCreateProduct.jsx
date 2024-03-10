// dependencias
import { useEffect, useState, Suspense, lazy, useContext } from "react";
// servicios de la api
import { allProducts } from "../../services/apiActions.js";
// componentes
const ListTable = lazy(() => import('../../components/Products/ListTable.jsx'));
const CreateUpdateForm = lazy(() => import('../../components/Products/CreateUpdateForm.jsx'));
// contexto
import { GlobalContext } from "../../context/GlobalContext.jsx";

const ShowCreateProduct = () => {

    // cambiado el titulo de la pagina
    document.title = 'Productos | Juan Vidal';

    // contexto para actualizar el contenido de la tabla
    const { updateTable } = useContext(GlobalContext);

    // stado que maneja los productos
    const [products, setProducts] = useState([]);

    // renderizando todos los productos
    useEffect(() => {
        const fetchProductos = async() => {
            const productos = await allProducts();
            setProducts(productos.data)
        }
        fetchProductos();
        
    }, [updateTable]);


    return (
        <Suspense fallback='Cargando...'>
            <div className="w-screen flex h-screen">
                {/* tabla */}
                <div className=" w-[60vw] h-full p-8">
                    {
                        products.length > 0 ? <ListTable/> : <h1>No hay productos Disponibles</h1>
                    }
                </div>
                {/*  formulario */}
                <div className="bg-red-500 w-[40vw] h-full p-8 flex justify-center items-center">
                    <CreateUpdateForm/>
                </div>
            </div>
        </Suspense>
    );
}

export default ShowCreateProduct;