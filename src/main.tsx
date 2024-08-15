import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './pages/HomePage.tsx'
import './index.css'
import { ProductsOnCartProvider } from './hooks/productsOnCartContext.tsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer />
    <ProductsOnCartProvider>
      <HomePage />
    </ProductsOnCartProvider>
  </React.StrictMode>,
)
