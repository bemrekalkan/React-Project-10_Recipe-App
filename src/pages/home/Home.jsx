import HomeStyle from "./Home.style";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const APP_ID = `ebe4dc0a`;
  const APP_KEY = `bd2b4d21cff9784aa4ababb3fd7bf856`;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=$
  {APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    //! {data} => Destructring
    const { data } = await axios.get(url);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
};

export default Home;
