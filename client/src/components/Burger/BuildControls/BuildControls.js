import React from "react";
import Classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={Classes.BuildControls}>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientsAdded(ctrl.type)}
            removed={() => props.ingredientsRemove(ctrl.type)}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
