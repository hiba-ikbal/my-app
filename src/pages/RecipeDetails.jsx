import { useNavigate, useParams } from "react-router-dom";

export default function RecipeDetails({ recipes, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const recipe = recipes.find(r => r.id === id);

  // if recipe not found
 if (!recipe) {
  return (
    <div>
      <p>Recipe not found.</p>
      <button
          onClick={() => {
            onDelete(Number(id));
            navigate("/");
          }}
        >
          Delete recipe
        </button>
    </div>
  );
}
  
  
  // prevent `.split` crash
  const ingredients = recipe.ingredients || "";
  const instructions = recipe.instructions || "";
  return (
   <div>
      <h1>{recipe.title}</h1>
      {recipe.image && <img src={recipe.image} alt=""  style={{ maxWidth: "30%", borderRadius: 12 }}/>}
      <p><strong>Category:</strong> {recipe.category}</p>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.split("\n").map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{instructions}</p>


      {/* External link */}
      {recipe.link && (
        <p>
          <a href={recipe.link} target="_blank" rel="noreferrer">
            View original recipe
          </a>
        </p>
      )}

    <button
        onClick={() => {
          onDelete(recipe.id);
          navigate("/");
        }}
      >
        Delete recipe
      </button>
    
 </div>

  );
}
