import React from 'react'
import { categories } from '../data/categories'
import CategoryCard from './CategoryCard'

export default function Categories({ selectedCategory, setCategory }) {
  return (
    <section className='categories'>
      <h3 className='categories__heading'>Categories</h3>
      <div className='categories__container'>
        {categories.map(category => <CategoryCard {...{ category, selectedCategory, setCategory }} />)}
      </div>
    </section>
  )
}

