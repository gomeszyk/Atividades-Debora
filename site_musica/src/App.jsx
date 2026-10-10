import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Componentes/header.jsx'
import Home from './Componentes/home.jsx'
import Sobrenos from './Componentes/sobrenos.jsx'
import Instrumentos from './Componentes/instrumentos.jsx'
import Endereco from './Componentes/endereco.jsx'
import Contato from './Componentes/contato.jsx'
import Footer from './Componentes/footer.jsx'

function App() {


  return (

    <div className="img_fundo">

     <Router>
         <Header />
    
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobrenos' element={<Sobrenos />} />
          <Route path='/instrumentos' element={<Instrumentos />} />
          <Route path='/endereco' element={<Endereco />} />
          <Route path='/contato' element={<Contato />} />
      </Routes>

      
      <Footer />

      </main>
     </Router>

   
    </div>
  
  )
}

export default App
