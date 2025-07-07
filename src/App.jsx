import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Gif } from "./components/Gif";
import { SearchCategories } from "./components/SearchCategories";

import { getGifs } from "./helpers/getGifs";

import "./styles.css";

function App() {
  const [categories, setCategories] = useState(["Movies"]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const loadImages = async () => {
    const newImages = await getGifs(categories[0]);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    if (categories.length === 0) return;
    loadImages();
  }, [categories]);

  return (
    <>
      <Header title="The Gif Seeker" />
      <SearchCategories onNewCategory={handleCategories} />
      {isLoading ? <p>Cargando</p> : null}
      <div className="card-grid">
        {images.map((image) => {
          return (
            <Gif
              key={image.id}
              title={image.title}
              imageUrl={image.url}
              id={image.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
