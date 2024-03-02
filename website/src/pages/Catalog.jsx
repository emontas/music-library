
// Catalog.js

import { Link } from 'react-router-dom';

const albums = [
  
  {
    id: 1,
    title: 'Album 1 - City Pulse',
    image: '/images/city_pulse.jpg',
    thumbnail: '/album/path_to_album_1_thumbnail.jpg',
  },
  {
    id: 2,
    title: 'Album 2 - Caribbean HipHop',
    image: '/images/caribbean_HipHop.jpg',
    thumbnail: '/album/caribbean_HipHop_thumbnail.jpg',
  },
  {
    id: 3,
    title: 'Album 3 - Asphalt Groove',
    image: '/images/asphalt_groove_collective.jpg',
    thumbnail: '/album/asphalt_groove_collective_thumbnail.jpg',
  },
  {
    id: 4,
    title: 'Album 4 - Island Hop',
    image: '/images/island_Hop.jpg',
    thumbnail: '/album/island_Hop_thumbnail.jpg',
  },
];

function Catalog() {
  return (
    <div className="container mx-auto mt-8 grid grid-cols-3 gap-4">
      {albums.map(album => (
        <Link to={`/album/${album.id}`} key={album.id}>
          <div className="border p-4 hover:bg-gray-100">
            <img src={album.image} alt={album.title} className="mb-2" />
            <p className="font-bold">{album.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Catalog;
