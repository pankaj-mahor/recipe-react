import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDotCircle } from "react-icons/fa";
import {
  Info,
  Button,
  DetailWrapper,
  Grid,
  CardCuisine,
} from "../styled/Styled";
const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  const fetchDetails = async () => {
    const api = `https://api.spoonacular.com/recipes/${params.name}/information`;
    const res = await fetch(
      `${api}?apiKey=${process.env.REACT_APP_FOOD_API_KEY}`
    );
    const data = await res.json();
    // console.log(data);
    setDetails(data);
  };

  return (
    <DetailWrapper>
      <div>
        <h2>
          {details.title}{" "}
          <span>
            {details.vegetarian ? (
              <FaDotCircle style={{ color: "green" }} title="Veg" />
            ) : (
              <FaDotCircle style={{ color: "red" }} title="Non-Veg" />
            )}
          </span>
        </h2>
        <img src={details.image} />

        <div className="flexx">
          {details.dishTypes?.map((dish, index) => {
            return <span key={index}>{dish}</span>;
          })}
        </div>
      </div>

      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <br />

            <h3
              style={{ fontWeight: 500, lineHeight: 1.5 }}
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></h3>
            <br />
            <h2>Instructons</h2>
            <h3
              style={{ fontWeight: 500, lineHeight: 1.5 }}
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>

      {/* {details.title}  */}
    </DetailWrapper>
  );
};

export default Recipe;
