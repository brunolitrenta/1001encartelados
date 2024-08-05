/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from './HeaderComponent.module.scss'
import Logo from '../../assets/images/logo1001.png'
import userIcon from '../../assets/images/user-solid.svg'
import cartIcon from '../../assets/images/cart-shopping-solid.svg'
import { useState } from 'react'
import { useProductsOnCart } from '../../hooks/useProductsOnCart.ts'

export default function HeaderComponent() {

  const { productsOnCart } = useProductsOnCart()
  const [selectedButton, setSelectedButton] = useState<string>("products")

  return (
    <header>
      <nav>
        <img className={styles.logo} src={Logo} alt="Logotipo da 1001 encartelados" />
        <ul>
          <li>
            <button onClick={() => setSelectedButton('products')} className={selectedButton == "products" ? styles.selectedButton : undefined}>Produtos</button>
          </li>
          <li>
            <button onClick={() => setSelectedButton('support')} className={selectedButton == "support" ? styles.selectedButton : undefined}>Suporte</button>
          </li>
          <li>
            <button onClick={() => setSelectedButton('about')} className={selectedButton == "about" ? styles.selectedButton : undefined}>Sobre</button>
          </li>
        </ul>
        <div className={styles.userArea}>
          <button className={styles.cartIcon}>
            <img src={cartIcon} alt="" />
            {
              productsOnCart.length > 0 ? <span>{productsOnCart.length}</span> : null
            }
          </button>
          <div className={styles.loginArea}>
            <button>
              <img src={userIcon} alt="" />
            </button>
            <p>Faça login ou registre-se já!</p>
          </div>
        </div>
      </nav>
    </header>
  )
}