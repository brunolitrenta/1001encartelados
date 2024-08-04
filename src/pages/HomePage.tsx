import HeaderComponent from '../components/header/HeaderComponent.tsx'
import { ProductComponent } from '../components/productComponent/ProductComponent.tsx'
import styles from './HomePage.module.scss'

export function HomePage() {
    return (
        <>
            <HeaderComponent />
            <main className={styles.mainContent}>
                <ProductComponent />
            </main>
        </>

    )
}