import React from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import 'bootstrap/dist/css/bootstrap.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Menu/>
      <Content/>
      <Footer/>
    </div>
  )
}


