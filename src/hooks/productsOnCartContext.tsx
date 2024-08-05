import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

interface productsOnCartProps {
    children: ReactNode
}

export interface IProductsOnCartContextDataProps {
    setProductsOnCart: Dispatch<SetStateAction<Array<number>>>,
    productsOnCart: Array<number>
}

const ProductsOnCartContextData = createContext<IProductsOnCartContextDataProps>({} as IProductsOnCartContextDataProps)

export function ProductsOnCartProvider({ children }:  productsOnCartProps) {
    const [productsOnCart, setProductsOnCart] = useState<Array<number>>([])

    return (
        <ProductsOnCartContextData.Provider value={{
            productsOnCart,
            setProductsOnCart,
        }}>
            {children}
        </ProductsOnCartContextData.Provider>
    )
}

export { ProductsOnCartContextData }