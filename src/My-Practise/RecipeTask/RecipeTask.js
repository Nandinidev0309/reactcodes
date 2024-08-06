
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const RecipeTask = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      const jsonData = await res.json();
      setData(jsonData.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredRecipes = data.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div style={{ backgroundColor: "pink" }}>
      <center>
        <div style={{ padding: "50px" }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for a recipe"
          />
          <input type="submit" value="Search" />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((each, index) => (
              <div
                key={index}
                style={{
                  flexBasis: "30%",
                  marginBottom: "100px",
                  backgroundColor: "black",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                  padding: "10px",
                  borderRadius: "5px",
                  color: "white",
                  height: "330px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <center>
                  <h3>{each.name}</h3>
                  <img
                    src={each.image}
                    alt={each.name}
                    height={200}
                    width={350}
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                  />
                 
                  <button onClick={() => openModal(each)} style={{margin:"20px"}}>View Details</button>
                </center>
              </div>
            ))
          ) : (
            <div style={{
                textAlign: "center",
                width: "100%",
                padding: "20px",
                color: "white",
                backgroundImage: "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "5px",
                height:"100vh" 
              }}>
              <h3 style={{color:"black", marginTop:"-5%"}}>Not available in the store</h3>
            </div>
          )}
        </div>
      </center>
      <Modal recipe={selectedRecipe} onClose={closeModal} />
    </div>
  );
};

export default RecipeTask;
