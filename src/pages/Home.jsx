import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddRecipeModal from '../components/AddRecipeModal' 
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilters'


export default function Home({ recipes, setRecipes, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch =
      recipe.title?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || recipe.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ paddingBottom: "80px" }}>
      <Header />

      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <CategoryFilter
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <h1>My Recipes</h1>

      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <ul>
          {filteredRecipes.map(recipe => (
            <li key={recipe.id} style={{ display: "flex", gap: "8px" }}>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/recipes/${recipe.id}`)}
              >
                {recipe.title}
              </span>
              <button onClick={() => onDelete(recipe.id)}>✕</button>
            </li>
          ))}
        </ul>
      )}

      {/* Floating Add Button */}
      <button
        className="floating-add-btn"
        onClick={() => setShowModal(true)}
      >
        +
      </button>

      {showModal && (
        <AddRecipeModal
          onClose={() => setShowModal(false)}
          onAdd={(newRecipe) => {
            setRecipes(prev => [...prev, newRecipe]);
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

