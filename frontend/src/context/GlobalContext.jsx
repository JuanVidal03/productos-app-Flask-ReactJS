// dependecias
import { useState, createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {

    // actualizado la tabla de productos
    const [updateTable, setUpdateTable] = useState(false);
    const changeUpdateTableState = () => updateTable ? setUpdateTable(false) : setUpdateTable(true);

    return (
        <GlobalContext.Provider value={{
            updateTable,
            setUpdateTable,
            changeUpdateTableState
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;