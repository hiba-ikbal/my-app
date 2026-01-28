// import { useNavigate } from "react-router-dom";

// export default function Card({ recipe, onDelete }) {
//   const navigate = useNavigate();
// function handleClick(){
//     //check more detail abt this function
//     //external recipe
//     if(recipe.link){
//         window.open(recipe.link,"_blank");
//         return;
//     }
//     //otherwise -> internal recipe page
//     navigate(`/recipes/${recipe.id}`);
// }
//   return (
//    <div
//       className="recipe-card"
//       onClick={handleClick}
//       style={{ cursor: "pointer" }}
//     >
//       {/* Image */}
//       {recipe.image && (
//         <img
//           src={recipe.image}
//           alt={recipe.title}
//           className="recipe-image"
//         />
//       )}

//       {/* Content */}
//       <div className="recipe-content">
//         <h3 className="recipe-title">{recipe.title}</h3>

//         <span className="recipe-category">
//           {recipe.category}
//         </span>

//         {/* Ingredients (ONLY if they exist) */}
//         {recipe.ingredients && (
//           <div className="recipe-section">
//             <strong>Ingredients</strong>
//             <p>
//               {recipe.ingredients.split("\n").slice(0, 3).join(", ")}
//               {recipe.ingredients.split("\n").length > 3 && "..."}
//             </p>
//           </div>
//         )}

//        {/* Instructions (ONLY if they exist) */}
//         {recipe.instructions && (
//           <div className="recipe-section">
//             <strong>Instructions</strong>
//             <p>{recipe.instructions.slice(0, 80)}...</p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe, onDelete }) {
  const navigate = useNavigate();
// function handleClick(){
//      //check more detail abt this function
//      //external recipe
//      if(recipe.link){
//          window.open(recipe.link,"_blank");
//          return; 
// }
//      //otherwise -> internal recipe page
//      navigate(`/recipes/${recipe.id}`);
// }
function goToDetails(){
  navigate(`/recipes/${recipe.id}`);
}
 return (
    <div className="recipe-card" onClick={goToDetails}>
      {recipe.image && (
        <img src={recipe.image} alt={recipe.title} />
      )}

      <h3>{recipe.title}</h3>
      <span>{recipe.category}</span>

      <button
        onClick={(e) => {
          e.stopPropagation(); // stops navigation
          onDelete(recipe.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
