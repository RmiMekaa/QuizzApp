export default function CategoryCard({ category, selectedCategory, setCategory }) {
  const background = require('../images/categories/' + category.image);

  return (
    <div
      className={(category.name === selectedCategory) ? 'categoryCard categoryCard--active' : 'categoryCard'}
      onClick={() => setCategory(category.name)}>
      <img src={background} alt=""></img>
      <h4>{category.name}</h4>
    </div>
  )
}