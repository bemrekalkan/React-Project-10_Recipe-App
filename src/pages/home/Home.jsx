import HomeStyle from "./Home.style";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState("");
  const APP_ID = `ebe4dc0a`;
  const APP_KEY = `bd2b4d21cff9784aa4ababb3fd7bf856`;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=$
  {APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      //! {data} => Destructring
      const { data } = await axios.get(url);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
    </div>
  );
};

export default Home;
