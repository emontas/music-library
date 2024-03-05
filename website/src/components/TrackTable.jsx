


const TrackTable = ({ tracks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Thumbnail</th>
          <th>Song Title</th>
          <th>Audio Player</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track, index) => (
          <tr key={index}>
            <td>
              <img src={track.thumbnail} alt={`${track.title} Thumbnail`} />
            </td>
            <td>{track.title}</td>
            <td>
              <audio controls>
                <source src={track.audioUrl} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrackTable;
