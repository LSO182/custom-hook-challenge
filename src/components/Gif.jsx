import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const Gif = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <ol>
        {images.map((image) => {
          return <li key={image.id}>
            {image.title}
          </li>;
        })}
      </ol>
    </>
  );
};
