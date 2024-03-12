// dependecias
import { useState, createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {

    // actualizado la tabla de productos
    const [updateTable, setUpdateTable] = useState(false);
    const changeUpdateTableState = () => updateTable ? setUpdateTable(false) : setUpdateTable(true);
    
    // manejando el ingreso a la aplicacion
    const [logIn, setLogIn] = useState(false);

    return (
        <GlobalContext.Provider value={{
            updateTable,
            setUpdateTable,
            changeUpdateTableState,
            logIn,
            setLogIn
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;