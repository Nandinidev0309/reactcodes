import React from "react";
import "./Recipe.css"

export const Products = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img
              src={item.recipe.image}
              variant="top"
              className="card-img-top"
              alt={item.recipe.label}
              height={200}
              width={200}
            />
            <div className="card-body">
              <h5 className="card-title">{item.recipe.label}</h5>
              <p className="card-text">
                Calories: {item.recipe.calories.toFixed(2)}
              </p>
              <a
                href={item.recipe.url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Recipe
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
