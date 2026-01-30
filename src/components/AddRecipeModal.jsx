import { useState } from "react";
import AddRecipeManual from "../pages/AddRecipeManual";
import AddRecipeLink from "../pages/AddRecipeLink";


export default function AddRecipeModal({ onClose, onAdd }) {
  const [mode, setMode] = useState("choose"); // choose | manual | link

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {mode === "choose" && (
          <>
            <h2>Add a recipe</h2>

            <div className="modal-actions">
              <button onClick={() => setMode("manual")}>
                Add manually
              </button>
              <button onClick={() => setMode("link")}>
                Paste recipe link
              </button>
            </div>
          </>
        )}

        {mode === "manual" && (
          <AddRecipeManual
            onSave={(recipe) => {
              onAdd(recipe);
              onClose();
            }}
            onCancel={onClose}
          />
        )}

        {mode === "link" && (
          <AddRecipeLink
            onSave={(recipe) => {
              onAdd(recipe);
              onClose();
            }}
            onCancel={onClose}
          />
        )}

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
