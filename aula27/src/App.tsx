import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import Contato from './pages/Contato/Contato'
import Sobre from './pages/Sobre/Sobre'
import NotFound from './pages/NotFound/NotFound'
import Layout from './components/Layout/Layout'
import ProdutoDetalhe from './pages/ProdutoDetalhe/ProdutoDetalhe'

function App() {

  return (
    <>
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/*" element={<NotFound />} />

            <Route path="/produto/:id" element={<ProdutoDetalhe /> } />

          </Route>
        </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
