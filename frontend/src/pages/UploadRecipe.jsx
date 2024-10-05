import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UploadRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cuisineType, setCuisineType] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [image, setImage] = useState(null); 
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(); 
      formData.append("title", title);
      formData.append(
        "ingredients",
        ingredients.split(",").map((item) => item.trim())
      );
      formData.append("instructions", instructions);
      formData.append("cuisineType", cuisineType);
      formData.append("cookingTime", cookingTime);
      if (image) {
        formData.append("image", image);
      }

      await axios.post("http://localhost:7890/api/recipes", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/"); 
    } catch (error) {
      setError("Error creating recipe");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Upload Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Ingredients (comma-separated)
          </label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Instructions</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cuisine Type</label>
          <input
            type="text"
            value={cuisineType}
            onChange={(e) => setCuisineType(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cooking Time (minutes)</label>
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border px-4 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Upload Recipe
        </button>
      </form>
    </div>
  );
};

export default UploadRecipe;
