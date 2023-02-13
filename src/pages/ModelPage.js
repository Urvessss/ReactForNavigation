import React, { useState } from "react";
import Model from "./../componets/Model";
import Button from "../componets/Button";

const ModelPage = () => {
  const [showModel, setShowModel] = useState(false);
  const handleClick = () => {
    setShowModel(true);
  };
  const handleClose = () => {
    setShowModel(false);
  };
  const actionBar=(
  <div><Button onClick={handleClose} primary>I Accept</Button></div>)
  const modal=<Model onClose={handleClose}actionBar={actionBar}/>
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Model
      </Button>
      {showModel && modal }
    </div>
  );
};
export default ModelPage;
