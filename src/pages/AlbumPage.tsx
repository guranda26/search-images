import { useEffect, useState } from "react";
import IAlbum from "../interface/albumInterface";

const AlbumPage: React.FC<{}> = () => {
  const [album, setAlbum] = useState<IAlbum[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data: IAlbum[]) => setAlbum(data));
  }, []);
  return (
    <div>
      {album.map(({ id, title, url, thumbnailUrl }) => (
        <div key={id}>
          <h2>{title}</h2>
          <div>
            <img src={thumbnailUrl} alt={title} />
          </div>
          <img src={url} alt={title} />
        </div>
      ))}
    </div>
  );
};

export default AlbumPage;
