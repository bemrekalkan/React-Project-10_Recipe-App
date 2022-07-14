import HomeStyle from "./Home.style";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Card } from "../../components/cards/Cards.style";
import Cards from "../../components/cards/Cards";
const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState("");
  const APP_ID = `ebe4dc0a`;
  const APP_KEY = `fdefa17787eb472fab4d630daa04fbef`;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter your meal");
    }
  };

  // console.log(recipes);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      <Cards recipes={recipes} />
    </div>
  );
};

export default Home;
