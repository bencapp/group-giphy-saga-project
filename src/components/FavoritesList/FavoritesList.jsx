import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import { useEffect } from "react";

function FavoritesList() {
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch({type: 'FETCH_FAVORITES'});
    }, [])


    const listOfFavorites = useSelector(store => store.favoritesToDisplay)
    console.log('list of Favorites', listOfFavorites);
    return(  
        listOfFavorites.map((favoriteObject) => {
            console.log('favoriteObject:', favoriteObject)
            return(
                <FavoritesItem key={favoriteObject.id } favoriteObject={favoriteObject}/>
            )
        })
    )

}

export default FavoritesList; 