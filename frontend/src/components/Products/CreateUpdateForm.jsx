// dependencias
import { useState, useContext } from "react";
// servicios de la api
import { createProduct } from "../../services/apiActions.js";
// contexto
import { GlobalContext } from "../../context/GlobalContext.jsx";

const CreateUpdateForm = () => {

    // actualizar el contenido de la tabla
    const { changeUpdateTableState, updateTable } = useContext(GlobalContext);

    const [nombre, setNombre] = useState('');
    const [codigo, setCodigo] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descripcion, setDescripcion] = useState('');

    // recoger datos del formulario
    const handleSubmit = async(e) => {
        e.preventDefault();
        const producto = {
            codigo: parseInt(codigo),
            nombre,
            precio: parseInt(precio),
            categoria,
            descripcion
        }
        console.log(updateTable)
        changeUpdateTableState();
        const result = await createProduct(producto)
    }


    return (
        <div className="rounded-md p-12 bg-white shadow-2xl">
            <h3 className="text-xl text-center font-bold uppercase mb-8">Registrar Productos!</h3>
            <form className="flex flex-wrap gap-3">
                <input onChange={(e) => setNombre(e.target.value)} className="border w-[48.5%] gap-2 focus:outline-none focus:bg-slate-200 p-2" type="text" placeholder="Nombre del producto" required/>
                <input onChange={(e) => setCodigo(e.target.value)} className="border w-[48.5%] gap-2 focus:outline-none focus:bg-slate-200 p-2" type="number" placeholder="Codigo del producto" required/>
                <input onChange={(e) => setPrecio(e.target.value)} className="border w-[48.5%] gap-2 focus:outline-none focus:bg-slate-200 p-2" type="number" placeholder="Precio del producto" required/>
                <select onChange={(e) => setCategoria(e.target.value)} className="border w-[48.5%] focus:outline-none" name="categoria" required>
                    <option value="Hogar">Hogar</option>
                    <option value="Electronicos">Electronicos</option>
                    <option value="Juguetes">Juguetes</option>
                </select>
                <input onChange={(e) => setDescripcion(e.target.value)} className="w-full focus:bg-slate-200 items-start border focus:outline-none p-2" type="text" placeholder="Descripcion del producto" />
                <input onClick={handleSubmit} className="w-full mt-4 uppercase bg-black text-white p-4 text-lg font-bold cursor-pointer" type="submit" value='Agregar'/>
            </form>
        </div>
    );
}

export default CreateUpdateForm;