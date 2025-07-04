import { useState } from "react";

export const SearchCategories = ({ onNewCategory }) => {
  const [inputVal, setInputVal] = useState("");

  const handleInput = (event) => {
    setInputVal(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputVal.trim().length <= 1) return;
    onNewCategory(inputVal.trim());
    setInputVal("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Gif seeker"
          value={inputVal}
          onChange={handleInput}
        />
      </form>
    </>
  );
};
