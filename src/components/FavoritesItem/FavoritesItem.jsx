import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function FavoritesItem(favoriteObject) {
    const dispatch = useDispatch(); 
    const [categoryVariable, setCategoryVariable] = useState(''); 

    const categoriesFromRedux = useSelector(store => store.categoriesToDisplay)

    const handleClick = () => {
          //this is where the put dispatch will be called 
        // dispatch({
            // type: 'CHANGE_CATEGORY', 
            // payload: categoryVariable
        // })
    }

    //need to get the list of categories to map over 
    const getCategories = () => {
        dispatch({type: 'GET_CATEGORIES'})
    }

    useEffect(() => {
        console.log('in useEffect');
        getCategories(); 
    }
    )

    return(
        //need the id of the photo object
        <div className="favoriteGifItem" id={favoriteObject.id}>
            <img src={favoriteObject.url} />
                                             
            <select onChange={(event) => setCategoryVariable({id: favoriteObject.id, category: event.target.value})}>
            {/* map over category array to render individual options  */}
                {categoriesFromRedux.map(categoryObject)}
                <option value="{categoryObject.id}">{categoryObject.name}</option>
            </select>
            <button onClick={handleClick}></button>
        </div>
    )  
}

export default FavoritesItem; 