import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

export default class Profile extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/my-profile", {
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
    return (
      <Container>
        <h1>Profile Page</h1>
      </Container>
    );
  }
}
