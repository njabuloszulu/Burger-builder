import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import Classes from "./Burger.css";
// import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

const Burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredients key={igKey + i} type={igKey} />;
    });
  });
  return (
    <div className={Classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
