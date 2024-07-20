import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/header/HeaderComponent.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderComponent />
  </React.StrictMode>,
)
