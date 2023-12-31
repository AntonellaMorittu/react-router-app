import { useParams } from "react-router-dom";
import songsData from "../../data/songs.json";

export const SongInfo = () => {
  const { songTitle } = useParams();

  // console.log(songTitle, songsData.songs[0].title);
  console.log(songTitle);

  const song = songsData.songs.find(
    // finds the title and matches it with the params passed in the url, transforms to lower case and replaces the spacec with -
    (s) => s.title.toLowerCase().replace(/ /g, "-") === songTitle
  );

  if (!song) return <p>Song not found!</p>;

  return (
    <div>
      <h2>Song Information</h2>
      <h5>Title</h5>
      <p>{song.title}</p>
      <h5>Artist</h5>
      <p>{song.artist}</p>
      <h5>Album Name</h5>
      <p>{song.album}</p>
      <h5>Year</h5>
      <p>{song.year}</p>
    </div>
  );
};
