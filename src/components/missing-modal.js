import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import style from "./start-page.module.css";

export default function VerticalModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Missing Information</h4>
        <p>You are missing some required fields.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className={style.button} variant="flat" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
