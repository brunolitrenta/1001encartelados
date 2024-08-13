import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import { IProductsOnCart } from "../interfaces/IProductsOnCart"

interface productsOnCartProps {
    children: ReactNode
}

export interface IProductsOnCartContextDataProps {
    setProductsOnCart: Dispatch<SetStateAction<Array<IProductsOnCart>>>,
    productsOnCart: Array<IProductsOnCart>,
}

const ProductsOnCartContextData = createContext<IProductsOnCartContextDataProps>({} as IProductsOnCartContextDataProps)

export function ProductsOnCartProvider({ children }: productsOnCartProps) {
    const [productsOnCart, setProductsOnCart] = useState<Array<IProductsOnCart>>([])

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