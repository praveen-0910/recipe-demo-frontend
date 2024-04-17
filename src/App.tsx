import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecipeCardContainer from "./components/RecipeCardContainer/RecipeCardContainer";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import AddRecipe from "./components/AddRecipe/AddRecipe";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RecipeCardContainer />} path="/" />
        <Route element={<AddRecipe />} path="/add-recipe" />
        <Route element={<RecipeDetails />} path="/recipe/:id" />
        <Route element={<>Different Route</>} path="/sample" />
      </Routes>
    </>
  );
}

export default App;
