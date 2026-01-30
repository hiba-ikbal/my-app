import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Grocery from "./pages/Grocery";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import RecipeDetails from "./pages/RecipeDetails";

import BottomNav from "./components/BottomNav";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  function deleteRecipe(id) {
    setRecipes(prev => prev.filter(r => r.id !== id));
  }

  function updateRecipe(updatedRecipe) {
    setRecipes(prev =>
      prev.map(r => (r.id === updatedRecipe.id ? updatedRecipe : r))
    );
  }

  return (
    <ErrorBoundary>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                recipes={recipes}
                setRecipes={setRecipes}
                onDelete={deleteRecipe}
              />
            }
          />

          <Route
            path="/recipes"
            element={
              <Recipes
                recipes={recipes}
                onDelete={deleteRecipe}
              />
            }
          />

          <Route
            path="/recipes/:id"
            element={
              <RecipeDetails
                recipes={recipes}
                onDelete={deleteRecipe}
                onUpdate={updateRecipe}
              />
            }
          />

          <Route path="/grocery" element={<Grocery />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        <BottomNav />
      </>
    </ErrorBoundary>
  );
}
