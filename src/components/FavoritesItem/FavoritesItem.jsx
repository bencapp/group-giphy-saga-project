import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FavoritesItem({ favoriteObject }) {
  const dispatch = useDispatch();
  const [categoryVariable, setCategoryVariable] = useState("");

  const categoriesFromRedux = useSelector((store) => store.categoriesToDisplay);

  const handleClick = () => {
    //   this is where the put dispatch will be called
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: categoryVariable,
    });
  };

  useEffect(() => {
    dispatch({ type: "GET_CATEGORIES" });
  }, []);

  return (
    //need the id of the photo object
    <div className="favoriteGifItem">
      <img src={favoriteObject.url}></img>
      <p>Current category: {favoriteObject.name}</p>
      <select
        onChange={(event) =>
          setCategoryVariable({
            id: favoriteObject.id,
            category: event.target.value,
          })
        }
      >
        {/* map over category array to render individual options  */}
        {categoriesFromRedux.map((categoryObject) => (
          <option key={categoryObject.id} value={categoryObject.id}>
            {categoryObject.name}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>SUBMIT</button>
    </div>
  );
}

export default FavoritesItem;
