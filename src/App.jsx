import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import CartPage from './pages/CartPage'
import StarsBackground from './components/StarsBackground'   // 🌌 Fondo animado (CSS)
import './App.css'                                           // 🎨 estilos globales

export default function App() {
  return (
    <>
      {/* 🌠 Fondo animado de estrellas (queda detrás de todo) */}
      <StarsBackground />

      {/* Contenido principal sobre el fondo */}
      <div className="content-wrapper">
        <Header />
        <main className="container my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/carrito" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
