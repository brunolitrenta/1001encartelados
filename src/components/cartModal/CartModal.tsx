import styles from './CartModal.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useProductsOnCart } from '../../hooks/useProductsOnCart';
import { useEffect } from 'react';

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
                                        <div className={styles.productCard}>
                                            <p>{product.cod} - {product.name}</p>
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
                    <button>Fechar pedido</button>
                    <button>Continuar comprando</button>
                </div>
            </section>
        </section>
    )
}