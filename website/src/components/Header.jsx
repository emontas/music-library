/* eslint-disable react/prop-types */



const Header = ({ setCurrentPage }) => {
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigation('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('catalog')}>Catalog</button>
          </li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
