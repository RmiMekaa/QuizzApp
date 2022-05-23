import React from 'react'
import { categories } from '../data/categories'
import CategoryCard from './CategoryCard'

export default function Categories({ selectedCategory, setCategory }) {
  return (
    <div className='categories'>
      {categories.map(category => <CategoryCard {...{ category, selectedCategory, setCategory }} />)}

    </div>
  )
}

