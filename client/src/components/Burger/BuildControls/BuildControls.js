import React from "react";
import Classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", key: "salad" },
  { label: "Cheese", key: "cheese" },
  { label: "Bacon", key: "bacon" },
  { label: "Meat", key: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={Classes.BuildControls}>
      {controls.map((ctrl) => {
        return <BuildControl key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
};

export default BuildControls;
