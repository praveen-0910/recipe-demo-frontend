import { useNavigate } from "react-router-dom";
import "./RecipeCard.css";

export interface IRecipe {
  id: string | number;
  title: string;
  image: string;
  description: string;
  myRecipe: string;
  stepToMake: { id: string; description: string }[];
  proTips: { id: string; tip: string }[];
  variations: { id: string; description: string }[];
  ingrdeints: { id: string; name: string }[];
  instructions: { id: string; step: string; image: "" }[];
}
interface IRecipeCardProps {
  recipe: IRecipe;
}

const RecipeCard = ({ recipe }: IRecipeCardProps) => {
  const { title, image, id } = recipe;
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (!id) return;
    navigate(`/recipe/${id}`, {
      state: recipe,
    });
  };
  return (
    <div onClick={handleNavigate} className="recipe-card">
      <img src={image} />
      <p>{title}</p>
    </div>
  );
};

export default RecipeCard;
