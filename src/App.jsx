import { Gif } from "./components/Gif";
import { SearchCategories } from "./components/SearchCategories";
import { useState } from "react";

import "./styles.css";

function App() {
  const [categories, setCategories] = useState(['Movies']);

  const handdleCategories = (newCategory) => {
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
      <SearchCategories onNewCategory={handdleCategories} />
      {categories.map((category) => {
        return <Gif category={category} key={category}/>;
      })}
    </>
  );
}

export default App;
