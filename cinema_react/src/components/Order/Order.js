import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Order extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    if (!this.props.user) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <h1>Order page</h1>
      </Container>
    );
  }
}
