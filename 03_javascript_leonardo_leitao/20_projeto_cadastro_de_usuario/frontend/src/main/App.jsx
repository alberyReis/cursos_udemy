import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  )
}


