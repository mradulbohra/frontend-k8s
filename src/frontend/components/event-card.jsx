import { Button } from "antd";
import React from "react";

const Card = ({ heading, subheading, image, buttonText }) => {
  return (
    <div className="card">
      <h1>{heading}</h1>
      <h3>{subheading}</h3>
      <img src={image} alt="" />
      <Button>{buttonText}</Button>
    </div>
  );
};

export default Card;
