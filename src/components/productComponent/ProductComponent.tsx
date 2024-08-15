import styles from './ProductComponent.module.scss'
import { products } from '../../products'
import { useProductsOnCart } from '../../hooks/useProductsOnCart.ts'
import { IProductsOnCart } from '../../interfaces/IProductsOnCart.ts'
import { toast } from 'react-toastify'

export function ProductComponent() {
    const { productsOnCart, setProductsOnCart } = useProductsOnCart()

    function addProductsOnCart(product: IProductsOnCart) {
        if (productsOnCart.includes(product)) {
            const filteredProducts = productsOnCart.filter((_product) => _product.cod !== product.cod)

            setProductsOnCart(filteredProducts)
            return
        }
        setProductsOnCart((p) => [...p, product])
    }

    function handleSelectItemAction(product: IProductsOnCart) {
        addProductsOnCart(product)
        toast.success('Produto adicionado ao carrinho!', {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            });
    }

    return (
        <section>
            <h1 className={styles.title}>Selecione seus produtos</h1>

            <div className={styles.productsArea}>
                {
                    products.map(product => {
                        return (
                            <button className={productsOnCart.includes(product) ? styles.productSelected : ''} onClick={() => handleSelectItemAction(product) } key={product.cod}>
                                <label>{product.cod}</label>
                                <input checked={productsOnCart.includes(product)} type="checkbox" name="checkbox" id={styles.checkbox} />
                            </button>
                        )
                    })
                }
            </div>
        </section>
    )
}