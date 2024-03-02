import CentralImage from '../components/CentralImage';

const Home = () => {
  return (
    <div className="container justify-items-center items-center mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Welcome to EM Groovelab</h1>
      <p className="text-lg text-center">Discover the best tracks for every mood!</p>
      <CentralImage />
    </div>
  );
};

export default Home;