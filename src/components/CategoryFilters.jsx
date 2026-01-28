const categories = [
  "All",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack",
  "Drinks",
];

export default function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={activeCategory === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
