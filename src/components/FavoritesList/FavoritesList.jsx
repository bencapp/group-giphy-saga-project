import React from "react";
import { useSelector} from 'react-redux';
import FavoritesItem from "../FavoritesItem/FavoritesItem";

function FavoritesList() {

    const listOfFavorites = useSelector(store => store.favoritesToDisplay)
    console.log(listOfFavorites);
    return(  
        listOfFavorites.map((favoriteObject) => {
            return(
                <FavoritesItem key={favoriteObject.id } favoriteObject={favoriteObject}/>
            )
        })

    )

}

export default FavoritesList; 