//Import React
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../actions/shoppingAction';

//Declare Function
function AddNewIngredient( ) {

    const [ newIngredient, setNewIngredient ] = useState( "" );
    const [ newMeasure, setNewMeasure ] = useState(1);
    const [ newMeal, setNewMeal ] = useState( "" ); 
    // useDispatch hook is used to update global state
    const dispatch = useDispatch();
    //let usernameFieldValue = document.getElementById("username");

    const newShoppingListItem = (ingredients) => {
        // shoppingReducer global state gets updated with new listitem
         dispatch(addAction({ ingredient: newIngredient, measure: newMeasure, meal: newMeal })); 
    }

    return(
        <>
            <h2>
                <i className="fas fa-th-list"></i>
                Add Your Own Ingredient
            </h2>
            <form className="form" id="add-ingredient-form">
                <label htmlFor="ingredient"><i className="fas fa-list"></i> Ingredient</label>
                <input type="text" id="ingredient" placeholder="Ingredient" onChange={e => { setNewIngredient( e.target.value )}} required />
                
                <label htmlFor="measure"><i className="fas fa-list"></i> How much?</label>
                <input type="text" id="measure" placeholder="Measure" onChange={e => { setNewMeasure( e.target.value )}} required />
                
                <label htmlFor="meal"><i className="fas fa-hamburger"></i> For what meal? (optional)</label>
                <input type="text" id="meal" placeholder="Meal" onChange={e => { setNewMeal( e.target.value )}} />

                <input type="button" id="addNewIngredientButton" value="Add" onClick={newShoppingListItem}/>
                <input type="reset" value="Reset" />
            </form>
        </>
    );
}

//Export Function
export default AddNewIngredient;