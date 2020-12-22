import React, { Component } from "react";
import { Form, Modal, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";

import "./Head.css";
import imglogo from "../../assest/img/logo.png";
import Login from "../Login/Login";
import Register from "../Register/Register";
import MenuLogin from "../MenuLogin/MenuLogin";

export default class Head extends Component {
  state = {
    show: false,
    key: "login",
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleOpen = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="d-flex head-container" style={{ background: "#f7f9fa" }}>
        <Link to="/">
          <img src={imglogo} alt="" className="ml-3" />
        </Link>

        <Form className="m-auto">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Tìm tên phim, diễn viên..."
              style={{ width: "350px", marginTop: "15px" }}
            />
          </Form.Group>
        </Form>

        <div className="m-auto">
          <div className="d-flex">
            <MenuLogin />

            <Button
              startIcon={<PersonIcon />}
              onClick={this.handleOpen}
              style={{ color: "#aaa" }}
            >
              Đăng nhập
            </Button>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={this.key}
              onSelect={(k) => this.setState({ key: k })}
            >
              <Tab eventKey="login" title="Đăng nhập">
                <Login />
              </Tab>
              <Tab eventKey="register" title="Đăng ký">
                <Register />
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
