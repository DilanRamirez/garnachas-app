import React, { useState, useRef } from "react";
import { Container, Form, Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import axios from "axios";

import style from "./discover-page.module.css";
import buttonStyle from "./start-page.module.css";
import VerticalModal from "./missing-modal";

const NewNav = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#d9534f !important" }}>
      <Navbar.Brand href="#home">Add Recipe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <i>
          <FiMenu className={style.menu_icon} />
        </i>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/discover">
            Discover
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default function AddRecipe() {
  // Form values
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [short_des, setShort_des] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [img, setImage] = useState("");
  const [comments, setComments] = useState("");
  const [author, setAuthor] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const refContainer = useRef("1");

  //   functions handlers
  const nameHandle = (e) => {
    setName(e.target.value);
  };
  const categoryHandle = (e) => {
    setCategory(e.target.value);
  };
  const short_desHandle = (e) => {
    setShort_des(e.target.value);
  };
  const difficultyHandle = (e) => {
    console.log(e.target.value);
    setDifficulty(e.target.value);
    console.log(difficulty);
  };
  const ingredientsHandle = (e) => {
    setIngredients(e.target.value);
  };
  const directionsHandle = (e) => {
    setDirections(e.target.value);
  };
  const authorHandle = (e) => {
    setAuthor(e.target.value);
  };
  const imageHandle = (e) => {
    // console.log(e.target.files[0]);
    // setImage({ selectedFile: e.target.files[0], loaded: 1 });
    // console.log(img);
    // const data = new FormData();
    // data.append("file", e.target.files[0]);
    // console.log(data);
    setImage(e.target.value);
  };
  const commentsHandle = (e) => {
    setComments(e.target.value);
  };

  // Validate Form
  const validateForm = () => {
    if (
      name.length === 0 ||
      category.length === 0 ||
      difficulty.length === 0 ||
      ingredients.length === 0 ||
      directions.length === 0
    ) {
      console.log(
        name.length,
        category.length,
        difficulty.length,
        ingredients.length,
        directions.length
      );
      setModalShow(true);
      return false;
    }
    return true;
  };

  const recipeDataForm = {
    name: name,
    category: category,
    short_desc: short_des,
    difficulty: difficulty,
    ingredients: ingredients,
    directions: directions,
    image: img,
    comments: comments,
    author: author,
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const sendData = validateForm();
    console.log(recipeDataForm);
    if (sendData) {
      axios
        .post("https://garnachas-app.herokuapp.com/recipes/add", recipeDataForm)
        .then((res) => console.log(res.data));

      window.location = "/discover";
    }
  };

  //   send data to mongoDB

  return (
    <div>
      <VerticalModal show={modalShow} onHide={() => setModalShow(false)} />
      <NewNav />
      <Container className={style.addRecipe_container}>
        <Form name="add_recipe_form" onSubmit={(e) => submitHandle(e)}>
          {/* Name */}
          <Form.Group>
            <Form.Label>
              Name <b style={{ color: "red" }}>*</b>
            </Form.Label>
            <Form.Control
              placeholder="Enter recipe name"
              onChange={(e) => nameHandle(e)}
            />
          </Form.Group>

          {/* Category */}
          <Form.Group>
            <Form.Label>
              Category <b style={{ color: "red" }}>*</b>
            </Form.Label>
            <Form.Control
              placeholder="Enter recipe category"
              onChange={(e) => categoryHandle(e)}
            />
          </Form.Group>

          {/* Short Description */}
          <Form.Group>
            <Form.Label>Short Description</Form.Label>
            <Form.Control
              placeholder="Enter a recipe short description"
              onChange={(e) => short_desHandle(e)}
            />
            <Form.Text className="text-muted">
              Say something about this recipe in a few words.
            </Form.Text>
          </Form.Group>

          {/* Difficulty */}
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className={style.required}>
              Difficulty <b style={{ color: "red" }}>*</b>
            </Form.Label>
            <Form.Control
              sef={refContainer}
              as="select"
              onClick={(e) => difficultyHandle(e)}
            >
              <option value="Easy">Easy</option>
              <option value="Normal">Normal</option>
              <option value="Hard">Hard</option>
            </Form.Control>
          </Form.Group>

          {/* Ingredients */}
          <Form.Group>
            <Form.Label>
              Ingredients <b style={{ color: "red" }}>*</b>
            </Form.Label>
            <Form.Control
              placeholder="Enter recipe ingredients"
              onChange={(e) => ingredientsHandle(e)}
            />
            <Form.Text className="text-muted">
              Use @ after every ingredient to be able to separe them all.
            </Form.Text>
          </Form.Group>

          {/* Directions */}
          <Form.Group>
            <Form.Label>
              Directions <b style={{ color: "red" }}>*</b>
            </Form.Label>
            <Form.Control
              placeholder="Enter recipe directions"
              onChange={(e) => directionsHandle(e)}
            />
            <Form.Text className="text-muted">
              Use @ after every step to be able to separe them all.
            </Form.Text>
          </Form.Group>

          {/* Image */}
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control
              placeholder="Enter the link of your picture"
              onChange={(e) => imageHandle(e)}
            />
          </Form.Group>

          {/* Comments */}
          <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control
              placeholder="Enter personal comments"
              onChange={(e) => commentsHandle(e)}
            />
            <Form.Text className="text-muted">
              Use this field to add some personal comments, and Use @ after
              every step to be able to separe them all.
            </Form.Text>
          </Form.Group>

          {/* Author */}
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control
              placeholder="Enter recipe description"
              onChange={(e) => authorHandle(e)}
            />
          </Form.Group>
          <Button className={buttonStyle.button} type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
