import styles from './ProductComponent.module.scss'
import { products } from '../../products'
import { useProductsOnCart } from '../../hooks/useProductsOnCart.ts'
//import checkSquareIcon from '../../assets/images/square-regular.svg'

export function ProductComponent() {
    const { productsOnCart, setProductsOnCart } = useProductsOnCart()

    function addProductsOnCart(cod: number) {
        if (productsOnCart.includes(cod)) {
            const filteredProducts = productsOnCart.filter((_cod) => _cod !== cod)

            setProductsOnCart(filteredProducts)
            return
        }

        setProductsOnCart((sp) => [...sp, cod])
    }

    return (
        <section>
            <h1 className={styles.title}>Selecione seus produtos</h1>

            <div className={styles.productsArea}>
                {
                    products.map(product => {
                        return (
                            <button className={productsOnCart.includes(product.cod) ? styles.productSelected : ''} onClick={() => addProductsOnCart(product.cod)}>
                                <label>{product.cod}</label>
                                <input checked={productsOnCart.includes(product.cod)} type="checkbox" name="checkbox" id={styles.checkbox} />
                            </button>
                        )
                    })
                }
            </div>
        </section>
    )
}