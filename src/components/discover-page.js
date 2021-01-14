import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

import style from "./discover-page.module.css";
import { dummyData } from "../data/recipes";

// Components
import RecipePreview from "./recipe-preview";

const NewNav = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#d9534f !important" }}>
      <Navbar.Brand href="#home">Discover</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <i>
          <FiMenu className={style.menu_icon} />
        </i>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/add-recipe">
            Add Recipe
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const HeaderNav = () => {
  return (
    <Container fluid={true} className={style.container_wrapper}>
      <p className={style.title}>Discover</p>
      <FiMenu className={style.menu_icon} />
    </Container>
  );
};

function DiscoverPage(props) {
  return (
    <div>
      <NewNav />
      <Container fluid={true} className={style.RecipePreview_container}>
        <RecipePreview dummyData={dummyData} />
      </Container>
    </div>
  );
}

export default DiscoverPage;
