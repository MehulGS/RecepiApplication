import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { FiSearch } from "react-icons/fi"; 
import axios from "axios";


const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredRecipes, setFilteredRecipes] = useState([]); 


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:7890/api/recipes");
        setRecipes(response.data);
        setFilteredRecipes(response.data); 
        setLoading(false);
        
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);


  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = recipes.filter(
      (recipe) =>
        recipe.cuisineType.toLowerCase().includes(value) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(value)
        )
    );
    setFilteredRecipes(filtered);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 ">
      <h2 className="text-5xl font-bold text-center text-gray-700 mb-7">
        Enjoy Your Favourite Recipe With Us
      </h2>
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search 2M+ Recipes"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full py-3 pl-10 pr-4 text-lg ring-2 ring-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <FiSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={24}
        />
      </div>
      <h3 className="text-xl font-semibold mb-4">Just for you</h3>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
