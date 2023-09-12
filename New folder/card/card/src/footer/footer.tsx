import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { CardIncrement } from "../interfaces/footer-interface";

const Footer: React.FC<CardIncrement> = ({ onAdd, onRemove, count, handleContinue, handleBack }) => {

  return (
    <footer className="footer-container">
      <div className="footer">
        <button onClick={handleBack}>Back</button>
        <span>
          If you are looking for multiple designs across your cards please{" "}
          <Link to="https://freefrontend.com/css-cards/">get in touch</Link>
        </span>
        <button onClick={onRemove}>-</button>
        <span>{count.length}</span>
        <button onClick={onAdd}>+</button>
        <button onClick={handleContinue}>Continue</button>
      </div>
    </footer>
  );
};

export default Footer;
