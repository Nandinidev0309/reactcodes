import React from "react";

const Modal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
          width: "500px",
          maxHeight: "80%",
          overflowY: "auto",
        }}
      >
        <h2>{recipe.name}</h2>
        <img
          src={recipe.image}
          alt={recipe.name}
          height={200}
          width="100%"
          style={{ objectFit: "cover", borderRadius: "5px" }}
        />
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={onClose} style={{ marginTop: "20px" }}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;









