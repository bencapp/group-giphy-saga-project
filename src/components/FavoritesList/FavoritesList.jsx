import React from "react";
import { useSelector} from 'react-redux';
import FavoritesItem from "../FavoritesItem/FavoritesItem";

function FavoritesList() {

    const listOfFavorites = useSelector(store => store.favoritesToDisplay)

    


    return(  
        // {listOfFavorites.map((favoriteObject) => {
        //     return(
        //     <FavoritesItem favoriteObject={favoriteObject}/>
        //     )
        // })}

    )

}

export default FavoritesList; 