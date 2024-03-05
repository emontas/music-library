// CentralImage.js
import { Link } from 'react-router-dom';

const CentralImage = () => {
  return (
    <div className="flex justify-items-center items-center">
      <Link to="/catalog" className="object-center m-auto  max-w-xl">
         <img
        src="logo_Groove_Lab.jpg"
        alt="EM Groovelab"
        
      />
      </Link>
    </div>
  );
}

export default CentralImage;
