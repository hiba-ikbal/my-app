import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe, onDelete }) {
  const navigate = useNavigate();

  return (
    <div
      className="recipe-card"
      onClick={() => navigate(`/recipes/${recipe.id}`)}
      style={{ cursor: "pointer" }}
    >
      {recipe.image && (
        <img src={recipe.image} alt={recipe.title} style={{maxWidth:"350px", width:"100%", display:"block"}}/>
      )}

      <h3>{recipe.title}</h3>
      <span>{recipe.category}</span>

      {/* External link button */}
      {recipe.link && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(recipe.link, "_blank");
          }}
        >
          View original
        </button>
      )}

      {/* Delete */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(recipe.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
