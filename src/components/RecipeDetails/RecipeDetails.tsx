import { useLocation, useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    image,
    title,
    description,
    myRecipe,
    stepToMake,
    proTips,
    variations,
    ingredients,
    instructions,
  } = state;
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="recipe-details-container">
      <p onClick={handleBack}>Go Back</p>
      <div className="recipe-details">
        <div className="image-box">
          <img src={image} alt="" />
        </div>
        <div className="info-box">
          <h2 className="title">{title}</h2>
        </div>
        <p className="description">{description}</p>
        <h3>About My Recipe</h3>
        <p>{myRecipe}</p>
        <h3>Steps to Make</h3>
        {stepToMake &&
          Array.isArray(stepToMake) &&
          stepToMake.length > 0 &&
          stepToMake.map((step, index) => (
            <div key={step.id} className="prep-step">
              <h4>Step: {index + 1}</h4>
              <p>{step?.description}</p>
            </div>
          ))}
        <h3>Pro Tips</h3>
        {proTips &&
          Array.isArray(proTips) &&
          proTips.length > 0 &&
          proTips.map((step, index) => (
            <div key={step.id} className="prep-step">
              <h4>Tip: {index + 1}</h4>
              <p>{step?.tip}</p>
            </div>
          ))}
        <h3>Variations</h3>
        {variations &&
          Array.isArray(variations) &&
          variations.length > 0 &&
          variations.map((step) => (
            <div key={step.id} className="prep-step">
              <p>{step?.description}</p>
            </div>
          ))}
        <h3>Ingredients</h3>
        {ingredients &&
          Array.isArray(ingredients) &&
          ingredients.length > 0 &&
          ingredients.map((step) => (
            <div key={step.id} className="ingredients">
              <p>{step?.name}</p>
            </div>
          ))}
        <h3>Instructions to Make</h3>
        {instructions &&
          Array.isArray(instructions) &&
          instructions.length > 0 &&
          instructions.map((step, index) => (
            <div key={step.id} className="prep-step">
              <h4>Step: {index + 1}</h4>
              <p>{step?.step}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeDetails;
