import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

import "./Order.css";

export default class Order extends Component {
  state = {
    orders: [],
    listFilms: [],
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ orders: res.data.orders });
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
        <ul>
          {this.state.orders.map((order, index) => (
            <li key={order._id}>
              <div>
                <h3>
                  {new Date(order.purchasedDate).toLocaleDateString("en-US")}
                </h3>
                <ul>
                  {order.films.map((film) => (
                    <Row>
                      <Col md={4}>
                        <img
                          src={film.filmId.urlImg}
                          alt=""
                          style={{
                            width: "80%",
                            height: "250px",
                            margin: "7px 0px",
                          }}
                        />
                      </Col>
                      <Col md={8}>
                        <h5>{film.filmId.VN_name}</h5>
                        <div>Giá: {film.price}</div>
                      </Col>
                    </Row>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}
