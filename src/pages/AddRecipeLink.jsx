import { useState } from "react";

export default function AddRecipeLink({ onSave, onCancel }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchPreviewImage(url) {
    try {
      const res = await fetch(
        `https://api.microlink.io?url=${encodeURIComponent(url)}`
      );
      const data = await res.json();
      return data?.data?.image?.url || "";
    } catch {
      return "";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !link.trim()) return;

    setLoading(true);

    const previewImage = await fetchPreviewImage(link);

    const newRecipe = {
      id: `${Date.now()}-${Math.random()}`,
      title,
      category: "External",
      link,                 
      image: previewImage,  
      ingredients: "",
      instructions: "",
      isExternal: true,
    };

    onSave(newRecipe);
    setLoading(false);
  }

  return (
    <div>
      <h2>Add Recipe from Link</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Recipe title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Paste recipe link"
          value={link}
          onChange={e => setLink(e.target.value)}
          required
        />

        {image && (
          <img
            src={image}
            alt="Preview"
            style={{ maxWidth: "10%", borderRadius: 8 }}
          />
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Fetching preview..." : "Save recipe"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}
