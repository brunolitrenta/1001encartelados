import { useContext } from "react"
import { IProductsOnCartContextDataProps, ProductsOnCartContextData } from "./productsOnCartContext"

export function useProductsOnCart(): IProductsOnCartContextDataProps {
    const context = useContext(ProductsOnCartContextData)

    return context
}