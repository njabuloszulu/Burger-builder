import React from "react";
import Classes from "./BurgerIngredients.css";

const BurgerIngredients = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={Classes.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={Classes.BreadTop}>
          <div className={Classes.Seeds1}></div>
          <div className={Classes.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={Classes.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={Classes.Cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={Classes.Salads}></div>;
      break;
    case "bacon":
      ingredient = <div className={Classes.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }
};

export default BurgerIngredients;
