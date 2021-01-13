import React, { Component } from "react";
import { Container, Table, Col, Row, Button } from "react-bootstrap";
import axios from "axios";

import ItemCart from "./ItemCart";
import "./FormCart.css";

export default class FormCart extends Component {
  state = {
    cart: [],
  };

  postPurchasedFilm = () => {
    // this.props.cart = [{_id:, name:}]
    //  -> [_id,...]
    const filmsList = this.props.cart.map((item) => item._id);

    // console.log(filmsList);

    const token = localStorage.getItem("token");

    if (token) {
      axios
        .post(
          "http://localhost:4000/client-page/purchase",
          { filmsList },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          // console.log(res);

          this.props.successBuyCart();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  
  render() {
    let totalPrice = 0;

    this.props.cart.forEach((item) => {
      totalPrice += item.price;
    });

    return (
      <Container className="w-50">
        {this.props.cart.map((item_phim) => {
          return (
            <ItemCart
              item_info={item_phim}
              remove_Item={this.props.removeCart}
              // save_Item={this.props.saveCart}
            />
          );
        })}

        <div className="d-flex my-3" style={{ marginLeft: "55%" }}>
          <Button
            variant="success"
            className="mr-2"
            onClick={this.postPurchasedFilm}
            disabled={!this.props.user}
          >
            Thanh Toán
          </Button>

          <button className="btn btn-warning">Tổng Tiền: {totalPrice}đ</button>
        </div>
      </Container>
    );
  }
}
