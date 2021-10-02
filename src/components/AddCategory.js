import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [InputValue, setInputValue] = useState('');
    const handleInputChange = (e)=>{

        setInputValue(e.target.value);

    };
    const handleSubmit = (e) => {

        e.preventDefault();//previene q de refresh a tod a la pagina
        if (InputValue.trim().length>0){
            setCategories((CatAdd)=>[InputValue, ...CatAdd]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit ={handleSubmit}>          
            <input 
            type = "text"
            value = {InputValue}
            onChange = { handleInputChange }
            />
        </form>
    )
}
AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
};