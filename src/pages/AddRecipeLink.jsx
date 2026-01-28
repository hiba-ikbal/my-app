import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipeLink({ setRecipes }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
//learn more abt the api
  async function fetchPreviewImage(link) {
    try {
      const res = await fetch(
        `https://api.microlink.io?url=${encodeURIComponent(link)}`
      );
      const data = await res.json();
      return data?.data?.image?.url || "";
    } catch {
      return "";
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!url || !title) return;

    const previewImage = await fetchPreviewImage(url);

    const newRecipe = {
      id:`${Date.now()}-${Math.random()}`,
      title,
      category: "External",
      image: previewImage,
      sourceUrl: url,
      isExternal: true,
    };

    setRecipes(prev => [...prev, newRecipe]);
    navigate("/");
  }

  return (
    <div>
      <h1>Add Recipe from Link</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Recipe title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <input
          placeholder="Paste recipe link"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
        />

        {image && <img src={image} alt="preview" />}

        <button type="submit">Save recipe</button>
      </form>
    </div>
  );
}
