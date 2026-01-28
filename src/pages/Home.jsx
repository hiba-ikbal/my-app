import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddRecipeModal from '../components/AddRecipeModal' 
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilters'
import EmptyState from '../components/EmptyState'
import Card from '../components/Card'


export default function Home({recipes, onDelete}) {
    //to wire the button add
    const [showModal,setShowModal] = useState(false)
    //add state for search +category 
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    // filter the recipes
      console.log("search:", searchTerm, "category:", activeCategory);

const filteredRecipes = recipes.filter(recipe => {
  const matchesSearch =
    recipe.title?.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCategory =
    activeCategory === "All" || recipe.category === activeCategory;

  return matchesSearch && matchesCategory;
});
    return (
    <div style={{ paddingBottom: '80px' }}>
      <Header />
      {/* wire searchbar and categoryfilter */}
      <SearchBar value={searchTerm} onChange={setSearchTerm}/>
      <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory}/>     
      <h1>My Recipes</h1>

      {/* empty state apears only when no recipe */}
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
     
        {/* Floating Add Button (ALWAYS visible) */}
      <button
        className="floating-add-btn"
        onClick={() => setShowModal(true)}>+</button>
        {showModal &&(<AddRecipeModal onClose={() => setShowModal(false)}/>
      )}
      {/* <EmptyState onAddClick={()=> setShowModal(true)}/>
        {showModal && (
            <AddRecipeModal onClose={() => setShowModal(false)}/>
        )} */}
        
      
    </div>

  )
  
}
