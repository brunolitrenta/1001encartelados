import styles from './CartModal.module.scss';
import {faCircleMinus, faCirclePlus, faTrash, faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useProductsOnCart } from '../../hooks/useProductsOnCart';
import { useEffect } from 'react';
import { IProductsOnCart } from '../../interfaces/IProductsOnCart';

interface ModalProps {
    overlayCloseModal?: boolean;
    onClose: () => void;
}
export default function Modal({
    onClose,
    overlayCloseModal = true,
}: ModalProps) {

    const { productsOnCart, setProductsOnCart } = useProductsOnCart()
    const sortedProductsOnCart = productsOnCart.sort((a, b) => a.cod < b.cod ? -1 : 1)

    useEffect(() => {
        document.body.classList.add(styles.modalOpen);

        return () => {
            document.body.classList.remove(styles.modalOpen);
        };
    }, []);

    function modifyQuantity(product: IProductsOnCart, type: string) {
        const filteredProducts = productsOnCart.filter(_product => _product !== product)

        if (type == 'minus' && product.quantity > 0) {
            product.quantity -= 10
        }
        else if (type == 'plus') {
            product.quantity += 10
        }

        setProductsOnCart([...filteredProducts, product])
    }

    function removeProduct(product: IProductsOnCart) {
        const filteredProducts = productsOnCart.filter(_product => _product !== product)

        setProductsOnCart(filteredProducts)
    }


    return (
        <section className={styles.modalJail}>
            <div
                className={styles.overlay}
                onClick={() => { if (overlayCloseModal) onClose() }}
            />

            <section className={styles.modal}>
                <div className={styles.topOfCart}>
                    <h1>Carrinho</h1>
                    <button
                        className={styles.closeBtn}
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faXmark} size="2xl" />
                    </button>
                </div>

                <div className={styles.content}>
                    {
                        productsOnCart.length == 0
                            ? <p>Não há produtos no carrinho!</p>
                            : <>
                                {sortedProductsOnCart.map(product => {
                                    return (
                                        <div className={styles.productCard} key={product.cod}>
                                            <p className={styles.productInfo}>{product.cod} - {product.name}</p>

                                            <div className={styles.quantitySelector}>
                                                <div className={styles.quantityDiv}>
                                                    <p>Quantidade:</p>

                                                    <div>
                                                        <button onClick={() => modifyQuantity(product, 'minus')} disabled={product.quantity == 10}>
                                                            <FontAwesomeIcon icon={faCircleMinus} size={"lg"} color={product.quantity == 10 ? 'grey' : '#9d1c00'} />
                                                        </button>

                                                        <p>{product.quantity}</p>

                                                        <button onClick={() => modifyQuantity(product, 'plus')}>
                                                            <FontAwesomeIcon icon={faCirclePlus} size={"lg"} color='#9d1c00' />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <button className={styles.removeProductBtn} onClick={() => removeProduct(product)}>
                                                <FontAwesomeIcon icon={faTrash} color='#9D1C00' />
                                                <p>Remover</p>
                                            </button>
                                        </div>
                                    )
                                })}

                                <button
                                    className={styles.removeAllProductsBtn}
                                    onClick={() => setProductsOnCart([])}
                                >
                                    Remover todos os produtos
                                </button>
                            </>
                    }
                </div>

                <div className={styles.bottomOfCart}>
                    <button onClick={() => console.log(productsOnCart)} className={styles.finalizeOrder}>Fechar pedido</button>
                    <button onClick={() => onClose()}>Continuar comprando</button>
                </div>
            </section>
        </section>
    )
}