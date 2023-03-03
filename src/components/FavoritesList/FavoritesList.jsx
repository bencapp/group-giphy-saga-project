import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import { useEffect } from "react";

function FavoritesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_FAVORITES" });
  }, []);

  const listOfFavorites = useSelector((store) => store.favoritesToDisplay);

  console.log(listOfFavorites);
  return (
    <div>
      {listOfFavorites.map((favoriteObject) => (
        <FavoritesItem
          favoriteObject={favoriteObject}
          key={favoriteObject.id}
        />
      ))}
    </div>
  );
}

export default FavoritesList;
