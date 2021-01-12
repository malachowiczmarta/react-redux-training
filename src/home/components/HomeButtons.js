import React from "react";
import Button from "../../UI/Button";

export default function HomeButtons() {
  return (
    <div className="button-container">
      <Button label="Load" />
      <Button label="Reset" />
      <Button label="Add" />
    </div>
  );
}
