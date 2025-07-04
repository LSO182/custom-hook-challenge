import { Gif } from "./components/Gif";
import { SearchCategories } from "./components/SearchCategories";
import { useState, useEffect } from "react";
import { getGifs } from "./helpers/getGifs";
import { Header } from "./components/Header";

import "./styles.css";

function App() {
  const [categories, setCategories] = useState(["Movies"]);
  const [images, setImages] = useState([]);

  const loadImages = async () => {
    const newImages = await getGifs(categories[0]);
    setImages(newImages);
  };

  useEffect(() => {
    if (categories.length === 0) return;
    loadImages();
  }, [categories]);

  const handleCategories = (newCategory) => {
    setCategories((prevCategories) => {
      if (
        prevCategories.some(
          (cat) => cat.toLowerCase() === newCategory.toLowerCase()
        )
      ) {
        return prevCategories;
      }
      return [newCategory, ...prevCategories];
    });
  };

  return (
    <>
    <Header title="The Gif Seeker" />
      <SearchCategories onNewCategory={handleCategories} />
      {images.map((image) => {
        return (
          <Gif
            key={image.id}
            title={image.title}
            url={image.url}
            id={image.id}
          />
        );
      })}
    </>
  );
}

export default App;
