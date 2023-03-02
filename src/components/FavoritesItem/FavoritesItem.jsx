import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";


function FavoritesItem() {
    const dispatch = useDispatch(); 
    const [categoryVariable, setCategoryVariable] = useState(''); 

    const 

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
                <option value="variablefunny">funny</option>
                <option value="variablecohort">cohort</option>
                <option value="variablecartoon">cartoon</option>
                <option value="variablensfw">nsfw</option>
                <option value="variablememe">meme</option>
            </select>
            <button onClick={handleClick}></button>
        </div>
    )  

}

export default FavoritesItem; 