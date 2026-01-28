import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipeManual({ setRecipes }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

    const newRecipe = {
      id: `${Date.now()}-${Math.random()}`,
      title,
      category,
      image,
      ingredients,
      instructions,
    };

    setRecipes(prev => [...prev, newRecipe]);
    navigate("/");
    console.log(newRecipe);

  }

  return (
    <div>
      <h1>Add Recipe Manually</h1>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        {/* Category */}
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Drinks">Drinks</option>
        </select>

        {/* Image */}
        <input
          placeholder="Image URL (optional)"
          value={image}
          onChange={e => setImage(e.target.value)}
        />

        {/* Ingredients */}
        <textarea
          placeholder="One ingredient per line"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
          rows={4}
          required
        />

        {/* Instructions */}
        <textarea
          placeholder="Step by step instructions"
          value={instructions}
          onChange={e => setInstructions(e.target.value)}
          rows={6}
          required
        />

        <button type="submit">Save recipe</button>
        
      </form>

      
    </div>
  );
}
