// Header.js
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/catalog" className="mr-4">Catalog</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
