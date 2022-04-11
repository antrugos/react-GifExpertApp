import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch Man' ]);

  return (
    <>
        <h2>Gif Expert App</h2>
        < AddCategory setCategories={ setCategories } />
        <hr ></hr>
        <ol>
          {
            categories.map( category => (
              <GifGrid 
                key={ category } 
                category={ category }/>
            ))
          }
        </ol>
    </>
  )
}
