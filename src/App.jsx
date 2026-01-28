import { Routes, Route } from 'react-router-dom'
import { useEffect,useState } from 'react'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Grocery from './pages/Grocery'
import Favorites from './pages/Favorites'
import Profile from './pages/Profile'
import AddRecipeManual from './pages/AddRecipeManual'
import AddRecipeLink from './pages/AddRecipeLink'
import BottomNav from './components/BottomNav'
import RecipeDetails from './pages/RecipeDetails'
import ErrorBoundary from './components/ErrorBoundary'
export default function App() {
  //load recipes from localstorage (also helpful when deleting)
  const [recipes, setRecipes] = useState(() => {
  const saved = localStorage.getItem("recipes");
  return saved ? JSON.parse(saved) : [];
});

  //to save when recipe change or delete
  useEffect(() => {
  localStorage.setItem("recipes", JSON.stringify(recipes));
}, [recipes]);
function deleteRecipe(id) {
  setRecipes(prev => prev.filter(r => r.id !== id));
}
  return (
    

<ErrorBoundary>
  {/* any error within RecipeDetails or its children will be caught here */}
<>
      <Routes>
        <Route path="/" element={<Home recipes={recipes} onDelete={deleteRecipe}/>} />
        <Route path="/recipes" element={<Recipes recipes={recipes} onDelete={deleteRecipe}/>} />
        <Route path="/recipes/:id"element={<RecipeDetails recipes={recipes} onDelete={deleteRecipe}/>}/>
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add/manual" element={<AddRecipeManual setRecipes={setRecipes} />} />
        <Route path="/add/link" element={<AddRecipeLink setRecipes={setRecipes}/>} />
      
      </Routes>

      <BottomNav />
      
    </>
  </ErrorBoundary>
  )
}
