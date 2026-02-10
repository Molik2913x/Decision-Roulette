function CategoryStep({ type, onSelect }) {
  const categories = type === 'food'
    ? ['Pizza', 'Chinese', 'Indian', 'Authentic / Home-style', 'Street Food', 'Something New']
    : ['Hot', 'Cold', 'Alcoholic', 'Non-Alcoholic', 'Energy Drinks', 'Something New'] // Assuming similar for drinks

  return (
    <div className="category-step">
      <h1>Choose a category:</h1>
      <div className="buttons">
        {categories.map((cat, index) => (
          <button
            key={cat}
            className="category-btn interactive"
            onClick={() => onSelect(cat)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryStep