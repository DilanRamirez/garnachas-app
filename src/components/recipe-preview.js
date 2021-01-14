import React, { useEffect, useState } from "react";
import { Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";
import axios from "axios";

import style from "./discover-page.module.css";

function RecipePreview({ dummyData }) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(
        "https://garnachas-app.herokuapp.com/recipes"
      );
      setRecipes(response.data);
      const parseData = {
        id: response.data.map((item) => item._id),
        name: response.data.map((item) => item.name),
        short_desc: response.data.map((item) => item.short_desc),
        difficulty: response.data.map((item) => item.difficulty),
        ingredients: response.data.map((item) => item.ingredients),
        directions: response.data.map((item) => item.directions),
        img: response.data.map((item) => item.image),
      };
    };

    getRecipes();
  }, []);
  const history = useHistory();

  const recipeData = recipes.map((item, key) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      onClick={() => {
        history.push({ pathname: "/recipe", state: { item } });
      }}
      key={key}
    >
      <div className={style.recipeWrapper} key={item.id}>
        <div className={style.recipePreview}>
          <Image src={item.image} rounded className={style.recipe_img} />
          <div className={style.recipeData_preview}>
            <p className={style.recipeData_preview_title}>{item.name}</p>
            <p className={style.recipeData_preview_shortDesc}>
              {item.short_desc}
            </p>
            <p className={style.recipeData_preview_diff}>{item.difficulty}</p>
          </div>
        </div>

        <Button
          style={{
            backgroundColor: "#fff",
            borderColor: "#fff",
            zIndex: 1,
          }}
          onClick={() => {
            history.push({ pathname: "/recipe", state: { item } });
          }}
        >
          <i>
            <BiChevronRight className={style.recipePreview_icon} />
          </i>
        </Button>
      </div>
      <hr className={style.dividor}></hr>
    </motion.div>
  ));
  return <div>{recipeData}</div>;
}

export default RecipePreview;
