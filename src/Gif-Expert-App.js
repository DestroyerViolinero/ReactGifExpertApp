import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';


const GifExpertApp = ()=>{
    
    const [categories, setCategories] = useState(['Ninja Scroll']);

    // const handleAdd =()=>{
    //     // setCategories((CatAdd)=>[...CatAdd, 'Naruto']);
    //     setCategories(['Naruto',...categories]);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr></hr>
            
            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 
                        key = {category}
                        Category ={category}
                        />
                    ))
                }
            </ol>
        </>
        )
};

export default GifExpertApp;