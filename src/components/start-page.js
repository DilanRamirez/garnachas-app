import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import style from "./start-page.module.css";
import logo from "../assets/img/start_logo.png";

function StartPage(props) {
  return (
    <Container className={style.wrapper}>
      <h1 className={style.title}>The Garnachas App</h1>

      <p className={style.subTitle}>
        Garnachas recipes from the community to the community
      </p>

      <motion.div
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <Image src={logo} />
      </motion.div>
      <a
        href="https://www.freepik.com/vectors/background"
        className={style.credits}
      >
        Background vector created by freepik - www.freepik.com
      </a>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.5 }}>
        <Button
          className={style.start_button}
          onClick={() => (window.location.href = "/discover")}
        >
          {/* <Link className={style.start_button} to="/discover"> */}
          Get Started
          {/* </Link> */}
        </Button>
      </motion.div>
      <div className={style.author_container}>
        <p className={style.author}>by Dilan Ramirez</p>
      </div>
    </Container>
  );
}

export default StartPage;
