import styles from './ProductComponent.module.scss'
import { products } from '../../products'
import { useProductsOnCart } from '../../hooks/useProductsOnCart.ts'
import { IProductsOnCart } from '../../interfaces/IProductsOnCart.ts'
import { useRef, useState } from 'react'

export function ProductComponent() {
    const { productsOnCart, setProductsOnCart } = useProductsOnCart()
    const [showCartNotification, setShowCartNotification] = useState<boolean>(false)
    const timeoutRef = useRef<number | null>(null);
    const [notificationKey, setNotificationKey] = useState<number>(0);

    function addProductsOnCart(product: IProductsOnCart) {
        if (productsOnCart.includes(product)) {
            const filteredProducts = productsOnCart.filter((_product) => _product.cod !== product.cod)

            setProductsOnCart(filteredProducts)
            return
        }
        setProductsOnCart((p) => [...p, product])

        if (showCartNotification) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                setNotificationKey(prevKey => prevKey + 1);
            }
        }

        setShowCartNotification(true)

        timeoutRef.current = setTimeout(() => {
            setShowCartNotification(false);
        }, 1500);
    }

    return (
        <section>
            <h1 className={styles.title}>Selecione seus produtos</h1>

            <div className={styles.productsArea}>
                {
                    products.map(product => {
                        return (
                            <button className={productsOnCart.includes(product) ? styles.productSelected : ''} onClick={() => addProductsOnCart(product)} key={product.cod}>
                                <label>{product.cod}</label>
                                <input checked={productsOnCart.includes(product)} type="checkbox" name="checkbox" id={styles.checkbox} />
                            </button>
                        )
                    })
                }
            </div>

            {
                showCartNotification
                    ? <div className={styles.cartNotification}>
                        <p>Produto adicionado ao carrinho!</p>
                        <div key={notificationKey} className={styles.progressBar}></div>
                    </div>
                    : null
            }

        </section>
    )
}