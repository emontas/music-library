/* eslint-disable react/prop-types */


const Track = ({ title, artist, duration, albumCover }) => {
  return (
    <div className="track">
      <img src={albumCover} alt={`${title} Album Cover`} />
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{duration}</p>
    </div>
  );
};

export default Track;
