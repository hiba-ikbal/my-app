import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import AddRecipeManual from "./AddRecipeManual";

export default function RecipeDetails({ recipes, onDelete, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const recipe = recipes.find(r => String(r.id) === id);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  if (isEditing) {
    return (
      <AddRecipeManual
        recipe={recipe}
        onSave={(updated) => {
          onUpdate(updated);
          setIsEditing(false);
        }}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>

      {recipe.image && (
        <img
          src={recipe.image}
          alt=""
          style={{ maxWidth: "30%", borderRadius: 12 }}
        />
      )}

      <p><strong>Category:</strong> {recipe.category}</p>

      <h3>Ingredients</h3>
      <ul>
        {(recipe.ingredients || "").split("\n").map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>

      {recipe.link && (
        <p>
          <a href={recipe.link} target="_blank" rel="noreferrer">
            View original recipe
          </a>
        </p>
      )}

      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button
        onClick={() => {
          onDelete(recipe.id);
          navigate("/");
        }}
      >
        Delete
      </button>
    </div>
  );
}
