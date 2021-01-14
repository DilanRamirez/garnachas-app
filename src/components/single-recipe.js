import React from "react";
import { Container, Button } from "react-bootstrap";
import { BiChevronLeft } from "react-icons/bi";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

import style from "./single-recipe.module.css";

export default function SingleRecipe({
  location: {
    state: { item },
  },
}) {
  // console.log(item);

  const history = useHistory();

  const ingredientsArr = item.ingredients.split("@");
  const directionsArr = item.directions.split("@");
  const commentsArr = item.comments
    ? item.comments.split("@")
    : ["no comments"];
  // console.log(directionsArr);

  return (
    <motion.div
      key={item._id}
      animate={{ scale: [1.1, 1] }}
      transition={{ duration: 1.1 }}
      style={{
        backgroundImage: 'url("' + item.image + '")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div key={item._id} className={style.img_background}>
        <Button
          className={style.return_button}
          onClick={() => history.goBack()}
        >
          <BiChevronLeft className={style.return_icon} />
        </Button>
      </div>

      <Container className={style.recipe_container}>
        <div className={style.recipe_content}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 className={style.recipe_title}>
              {item.name}
              <p className={style.recipe_author}>
                by {item.author ? item.author : "Unknown"}
              </p>
            </h2>
            <p className={style.recipe_dif}>{item.difficulty}</p>
          </div>
          <h4 className={style.recipe_ing_title}>Ingredients</h4>

          <p className={style.recipe_ing_content}>
            {ingredientsArr.map((item) => (
              <li>{item}</li>
            ))}
          </p>
          <h4 className={style.recipe_dir_title}>Directions</h4>
          <p className={style.recipe_ing_content}>
            {directionsArr.map((item) => (
              <li>{item}</li>
            ))}
          </p>
          <h4 className={style.recipe_dir_title}>Comments</h4>
          <p className={style.recipe_ing_content}>
            {commentsArr.map((item) => (
              <li>{item}</li>
            ))}
          </p>
        </div>
      </Container>
    </motion.div>
  );
}
