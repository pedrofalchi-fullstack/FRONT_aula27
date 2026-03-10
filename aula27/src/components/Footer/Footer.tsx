import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <>
        <footer className='bg-gray-800 text-white text-center p-6'>
          <p>&copy; 2026 Todos os direitos reservados</p>
          <nav className='mt-4'>
            <Link to="/" className="text-white hover:text-black mx-2">
            Home
          </Link>
          <Link to="/sobre" className="text-white hover:text-black mx-2">
            Sobre
          </Link>
          <Link to="/contato" className="text-white hover:text-black mx-2">
            Contato
          </Link>
          </nav>
          
        </footer>
        </>
    )
}
export default Footer;