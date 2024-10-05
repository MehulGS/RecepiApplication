import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRightCircle } from "react-icons/fi"; 
import { BASE_URL } from "../api/api"; 

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe._id}`}>
      <div className="bg-red-100 shadow-md rounded-lg p-4 mb-4 cursor-pointer hover:bg-gray-100 relative transition transform hover:-translate-y-1 hover:shadow-xl">
        {recipe.imageUrl && (
          <img
            src={`${BASE_URL}${recipe.imageUrl}`} 
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-t-md mb-4"
          />
        )}

        <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-4 truncate">{recipe.instructions}</p>

        <div className="absolute bottom-2 right-2 flex items-center space-x-2 text-blue-500 hover:underline">
          <span>Click to Know More</span>
          <FiArrowRightCircle size={20} />
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
