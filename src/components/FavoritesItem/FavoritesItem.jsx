import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


function FavoritesItem() {
    const dispatch = useDispatch(); 
    const [categoryVariable, setCategoryVariable] = useState(''); 

                                                        //change this to the reducer
    // const categoriesFromRedux = useSelector(store => store.reducer)

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

    return(
     
        //map over category array to render individual options 

        <div>
            {/* <img src="url will go here"/> */}
            <select onChange={(event) => setCategoryVariable({idOfPhoto: id, category: event.target.value})}>
                {/* change these later to the variables */}
                {categoriesFromRedux.map(categoryString)}
                <option value="{categoryString}">{categoryString}</option>
            </select>
            <button onClick={handleClick}></button>
        </div>
    )  

}

export default FavoritesItem; 