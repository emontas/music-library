
import Track from '../components/Track';

const Catalog = () => {
  const tracks = [
    {
      title: 'City Pulse',
      artist: 'Urban Beats Collective',
      duration: '3:45',
      albumCover: 'city_pulse.jpg',
    },
    // Add more track data as needed
  ];

  return (
    <div>
      <h1>Music Catalog</h1>
      <div className="track-list">
        {tracks.map((track, index) => (
          <Track
            key={index}
            title={track.title}
            artist={track.artist}
            duration={track.duration}
            albumCover={track.albumCover}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
