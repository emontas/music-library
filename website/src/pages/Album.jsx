import { useParams } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer'; // Make sure to import the AudioPlayer component

const albums = [
  {
    id: 1,
    title: 'Album 1',
    thumbnail: '/album/city_pulse_thumb.jpg',
    image: '/images/city_pulse.jpg',
    tracks: [
      { id: 1, title: 'City Pulse', audio: '/tracks/CityPulse.mp3' },
      { id: 2, title: 'Quantum Run', audio: '/tracks/QuantumRun.mp3' },
      { id: 3, title: 'Elevator Trap', audio: '/tracks/ElevatorTrap.mp3' },
    ],
  },
  {
    id: 2,
    title: 'Album 2',
    thumbnail: '/album/caribbean_HipHop_thumb.jpg',
    image: '/images/caribbean_HipHop.jpg',
    tracks: [
      { id: 4, title: 'Track 4', audio: 'replace_with_audio_url_4' },
      { id: 5, title: 'Track 5', audio: 'replace_with_audio_url_5' },
      { id: 6, title: 'Track 6', audio: 'replace_with_audio_url_6' },
    ],
  },
  {
    id: 3,
    title: 'Album 3',
    thumbnail: '/album/asphalt_groove_collective_thumb.jpg',
    image: '/images/asphalt_groove_collective.jpg',
    tracks: [
      { id: 7, title: 'Track 7', audio: 'replace_with_audio_url_7' },
      { id: 8, title: 'Track 8', audio: 'replace_with_audio_url_8' },
      { id: 9, title: 'Track 9', audio: 'replace_with_audio_url_9' },
    ],
  },
  {
    id: 4,
    title: 'Album 4',
    thumbnail: '/album/island_Hop_thumb.jpg',
    image: '/images/island_Hop.jpg',
    tracks: [
      { id: 10, title: 'Track 10', audio: 'replace_with_audio_url_10' },
      { id: 11, title: 'Track 11', audio: 'replace_with_audio_url_11' },
      { id: 12, title: 'Track 12', audio: 'replace_with_audio_url_12' },
    ],
  },
];

function Album() {
  const { id } = useParams();
  const selectedAlbum = albums.find(album => album.id === parseInt(id));

  if (!selectedAlbum) {
    return <div>Album not found!</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{selectedAlbum.title}</h2>
      <img src={selectedAlbum.thumbnail} alt={selectedAlbum.title} className="mb-4" />
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Audio Player</th>
          </tr>
        </thead>
        <tbody>
          {selectedAlbum.tracks.map(track => (
            <tr key={track.id}>
              <td className="border px-4 py-2">{track.title}</td>
              <td className="border px-4 py-2">
                <AudioPlayer track={track} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Album;
