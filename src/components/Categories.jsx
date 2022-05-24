import React from 'react'
import { categories } from '../data/categories'

export default function Categories({ selectedCategory, setCategory }) {
  return (
    <section className='categories'>
      <h3 className='categories__heading'>Category</h3>
      <div className='categories__container'>
        {categories.map(category => {
          const background = require('../images/categories/' + category.image);

          return (
            <button
              className={(category.name === selectedCategory) ? 'categoryCard categoryCard--active' : 'categoryCard'}
              onClick={() => setCategory(category.name)}>
              <img src={background} alt=""></img>
              <h4>{category.name}</h4>
            </button>
          )
        })}
      </div>
    </section>
  )
}

