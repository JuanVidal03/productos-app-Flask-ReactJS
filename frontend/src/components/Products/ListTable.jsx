// dependencias
import { Suspense, lazy, useState, useEffect } from "react";
// componentes
const RowTable = lazy(() => import('../../components/Products/RowTable.jsx'));
// servicios de la api
import { allProducts } from "../../services/productsApi.js";


const ListTable = () => {

    // cargando los productos
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const productos = await allProducts();
                setProducts(productos.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, []);


    return (
        <Suspense fallback='Cargando..'>
            <h1 className="text-3xl font-bold uppercase text-center mb-8">Productos Disponibles!</h1>
            <div>
                <table className="border w-full">
                    <thead>
                        <tr>
                            <th className="border p-2">Codigo</th>
                            <th className="border p-2">Nombre</th>
                            <th className="border p-2">Precio</th>
                            <th className="border p-2">Categoria</th>
                            <th className="border p-2">Descripcion</th>
                            <th className="border p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product => (
                                <RowTable key={product.codigo} product={product}/>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </Suspense>
    );
}

export default ListTable;
