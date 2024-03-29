// dependencias
import { Link } from "react-router-dom";


const RowTable = ({product}) => {
    return (
        <tr>
          <td className="border p-2 text-center">{product.codigo}</td>  
          <td className="border p-2 text-center">{product.nombre}</td>  
          <td className="border p-2 text-center">{product.precio}</td>  
          <td className="border p-2 text-center">{product.categoria}</td>
          <td className="border p-2">{product.descripcion}</td>
          <td className="p-2 border text-center">
            <Link to={`/editar-producto/${product.codigo}`}>
                <i className="las la-edit text-2xl cursor-pointer text-blue-500"></i>
            </Link>
            <i className="las la-trash-alt text-2xl cursor-pointer text-red-500"></i>
          </td>
        </tr>
    );
}

export default RowTable;