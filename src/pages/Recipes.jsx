import Card from "../components/Card";

export default function Recipes({ recipes, onDelete }) {
  
  return (
    <div className="recipes-grid">
      {recipes.map(recipe => (
        <Card key={recipe.id} recipe={recipe} onDelete={onDelete}/>
      ))}
    </div>
  );
}
