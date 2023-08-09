import { createContext } from 'react'

// primeiro devo criar o contexto exporta-lo
export const SomeContext = createContext();


// criando e exportando o component
export const HookUseContenxt = ({ children }) => {
    const contextValueShared = "compartilhada entre muitos";


    return (
        <SomeContext.Provider value={{contextValueShared}}>
            {children}
        </SomeContext.Provider>
    )
}
