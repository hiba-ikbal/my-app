import { useNavigate } from "react-router-dom";
import AddRecipeManual from "../pages/AddRecipeManual";
export default function AddRecipeModal({ onClose }) {
  const navigate = useNavigate();
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Add a recipe</h2>

        <div className="modal-actions">
          <button
            onClick={() => {
              onClose();
              navigate("/add/manual");
            }}
          >
            Add manually
          </button>

          <button onClick={()=>{
            onClose();
            navigate("/add/link");
          }}>
            Paste recipe link
          </button>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
