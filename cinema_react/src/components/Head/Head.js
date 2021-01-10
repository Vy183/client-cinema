import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Head.css";
import imglogo from "../../assest/img/logo.png";
import MenuLogin from "../MenuLogin/MenuLogin";
import ButtonLogin from "../Login/ButtonLogin";

export default class Head extends Component {
  state = {
    key: "login",
    user: "",
  };

  loginSuccess = (user) => {
    this.setState({ user: user });
  };

  logout = () => {
    this.setState({ user: "" });
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
            {this.state.user ? (
              <MenuLogin user={this.state.user} logout={this.logout} />
            ) : (
              <ButtonLogin loginSuccess={this.loginSuccess} />
            )}
          </div>
        </div>

        <Link to='/gio-hang'>
          <div
            className="mr-5 my-3"
            style={{
              background: "#f26c39",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <ShoppingCartIcon />
          </div>
        </Link>
      </div>
    );
  }
}
