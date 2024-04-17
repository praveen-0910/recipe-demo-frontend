import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeCardContainer.css";
import { recipeCardSampleData } from "../../data/recipeCard";
import { useNavigate } from "react-router-dom";

const RecipeCardContainer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/add-recipe");
  };
  return (
    <>
      <button onClick={handleNavigate} className="add-button">
        Add New Recipe
      </button>
      <div className="card-container">
        {recipeCardSampleData &&
          recipeCardSampleData.length > 0 &&
          recipeCardSampleData.map((recipe: any) => (
            <RecipeCard recipe={recipe} />
          ))}
      </div>
    </>
  );
};

export default RecipeCardContainer;
