/* eslint-disable react/prop-types */


const Track = ({ title, artist, duration, albumCover }) => {
  return (
    
    <div className="track flex flex-col items-center p-2 border">
      <img className="w-16 md:w-32 lg:w-48 rounded" src={albumCover} alt={`${title} Album Cover`} />
      <div className="track-info text-center">
        <h3>{title}</h3>
        <p>{artist}</p>
        <p>{duration}</p>
      </div>
    </div>
   
   
  );
  
};

export default Track;
