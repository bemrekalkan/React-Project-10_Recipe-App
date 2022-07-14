import React from "react";
import HeaderStyle, {
  Button,
  Select,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
} from "./Header.style";
const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        ></FoodInput>
        <Button type="submit">SEARCH</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => (
            <option key={index} value={meal.toLowerCase()}>
              {meal}
            </option>
          ))}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
