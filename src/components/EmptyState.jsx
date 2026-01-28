export default function EmptyState({ onAddClick }) {
  return (
    <div>
      <h2>No recipes yet</h2>
      <p>Start by adding your first recipe</p>
      <button onClick={onAddClick}>Add recipe</button>
    </div>
  );
}
