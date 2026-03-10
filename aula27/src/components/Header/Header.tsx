import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-blue-500 text-white p-6">
        {/* comentários */}
        <h1 className="text-4xl font-bold mb-2">Bem vindo!</h1>
        <p className="text-lg">Trabalhando com Tailwind</p>
        <nav className="mt-4 float-end">
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
      </header>
    </>
  );
};

export default Header;
