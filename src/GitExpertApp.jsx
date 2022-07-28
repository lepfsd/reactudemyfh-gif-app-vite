import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GitExpertApp = () => {

  const [categories, setCategories] = useState(['One punch'])

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>git expert app</h1>  
      <AddCategory  
        onNewCategory={ (event) => onAddCategory(event)}
      />
      { 
        categories.map( (category) => (
          <GifGrid 
            key={category} 
            category={category}
          /> 
        ))
      }
    </>
  )
}
