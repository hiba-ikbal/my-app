import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AddRecipeManual({ setRecipes, recipe, onSave, onCancel }) {
export default function AddRecipeManual({recipe, onSave, onCancel }) {

  // const navigate = useNavigate();

  const [title, setTitle] = useState(recipe?.title || "");
  const [category, setCategory] = useState(recipe?.category || "");
  const [image, setImage] = useState(recipe?.image || "");
  const [ingredients, setIngredients] = useState(recipe?.ingredients || "");
  const [instructions, setInstructions] = useState(recipe?.instructions || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

  const savedRecipe={
    id: recipe?.id ?? `${Date.now()}-${Math.random()}`,
    title,
    category,
    image,
    ingredients,
    instructions,
  };
  onSave(savedRecipe);
}



  return (
    <div>
      <h1>{recipe ? "Edit Recipe" : "Add Recipe"}</h1>

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
        <button type="button" onClick={onCancel}>Cancel</button>


        
      </form>

      
    </div>
  );
}
