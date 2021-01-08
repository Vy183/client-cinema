import React, { useState } from "react";

import {
  Container,
  // TextField,
  Button,
  // Modal,
  // Fade,
  // Backdrop,
} from "@material-ui/core";
import { Row, Col, Form } from "react-bootstrap";

const BuyCard = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    // setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const [state, setState] = useState({
    seri: "",
    card: "",
    seri_validate: false,
    card_validate: false,
  });

  const changeValueHandler = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const validateSeriHandler = () => {
    const seri_temp = state.seri;
    if (/[A-Za-z][0-9]{6}/.test(seri_temp)) {
      setState({ seri_validate: false });
    } else {
      setState({ seri_validate: true });
    }
  };

  const validateCardHandler = () => {
    const card_temp = state.card;

    if (/[0-9]{13}/.test(card_temp)) {
      setState({ card_validate: false });
    } else {
      setState({ card_validate: true });
    }
  };

  return (
    <Container
      style={{ background: "white", width: "40%", borderRadius: "4px" }}
    >
      <Row className="mt-5">
        <Col>
          <div className="mx-2 my-4">
            <Form>
              <Form.Group controlId="formBasicSeri">
                <Form.Label>Mã Seri</Form.Label>

                <Form.Control
                  placeholder="Mã Seri"
                  className="w-100"
                  id="outlined-seri"
                  // label="Số Seri"
                  variant="outlined"
                  name="seri"
                  value={state.seri}
                  onChange={changeValueHandler}
                  isInvalid={state.seri_validate}
                  onBlur={validateSeriHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập mã seri gồm 1 kí tự và 6 số bất kì
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicCard">
                <Form.Label>Mã Thẻ</Form.Label>

                <Form.Control
                  className="w-100"
                  id="outlined-mathe"
                  variant="outlined"
                  placeholder="Mã Thẻ"
                  name="card"
                  value={state.card}
                  onChange={changeValueHandler}
                  isInvalid={state.card_validate}
                  onBlur={validateCardHandler}
                />
                <Form.Control.Feedback type="invalid">
                  Vui lòng nhập mã card gồm 13 số bất kì
                </Form.Control.Feedback>
              </Form.Group>

              {/* <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                variant="outlined"
                // error={validateSeriHandler}
                // helperText={}
              /> */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="mr-3"
                  onClick={handleOpen}
                >
                  Mua Thẻ
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BuyCard;
