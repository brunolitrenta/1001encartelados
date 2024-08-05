import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './pages/HomePage.tsx'
import './index.css'
import { ProductsOnCartProvider } from './hooks/productsOnCartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsOnCartProvider>
      <HomePage />
    </ProductsOnCartProvider>
  </React.StrictMode>,
)
