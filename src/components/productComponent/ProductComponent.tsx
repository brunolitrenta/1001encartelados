import { useRef, useState } from 'react'
import styles from './ProductComponent.module.scss'
//import checkSquareIcon from '../../assets/images/square-regular.svg'

export function ProductComponent() {
    const buttonRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({})

    const products = [{
        cod: 100,
        name: 'prego'
    },
    {
        cod: 101,
        name: 'prego'
    },
    {
        cod: 102,
        name: 'prego'
    },
    {
        cod: 103,
        name: 'prego'
    },
    {
        cod: 104,
        name: 'prego'
    },
    {
        cod: 105,
        name: 'prego'
    },
    {
        cod: 106,
        name: 'prego'
    },
    {
        cod: 107,
        name: 'prego'
    },
    {
        cod: 108,
        name: 'prego'
    },
    {
        cod: 109,
        name: 'prego'
    },
    {
        cod: 110,
        name: 'prego'
    },
    {
        cod: 111,
        name: 'prego'
    },
    {
        cod: 112,
        name: 'prego'
    }]

    const [selectedProducts, setSelectedProducts] = useState<Array<number>>([])

    function selectProduct(cod: number) {
        const checkBoxElement = buttonRefs.current[cod]?.children[1] as HTMLInputElement

        if (selectedProducts.includes(cod)) {
            const filteredProducts = selectedProducts.filter((_cod) => _cod !== cod)

            setSelectedProducts(filteredProducts)

            buttonRefs.current[cod]!.classList.remove(styles.productSelected)
            checkBoxElement.checked = false

            return
        }

        setSelectedProducts((sp) => [...sp, cod])
        buttonRefs.current[cod]!.classList.add(styles.productSelected)
        checkBoxElement.checked = true
    }

    return (
        <section>
            <h1 className={styles.title}>Selecione seus produtos</h1>

            <div className={styles.productsArea}>
                {
                    products.map(product => {
                        return (
                            <button ref={el => buttonRefs.current[product.cod] = el}  onClick={() => selectProduct(product.cod)}>
                                <label>{product.cod}</label>
                                <input type="checkbox" name="checkbox" id={styles.checkbox} />
                            </button>
                        )
                    })
                }
            </div>
        </section>
    )
}