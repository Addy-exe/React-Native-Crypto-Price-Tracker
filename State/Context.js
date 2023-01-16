import { createContext , useState } from "react";

export const CoinsContext = createContext();

const Context = ({children}) => {

    return(
        <CoinsContext.Provider>
            {children}
        </CoinsContext.Provider>
    )
}

export default Context