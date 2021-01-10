import React, { Component } from "react";
import { Container, Table, Col, Row } from "react-bootstrap";

import ItemCart from "./ItemCart";
import data from "../../assest/dummydata/data";
import './FormCart.css';

export default class FormCart extends Component {
  state = {
    mang_gio_hang: [],
  };

  componentDidMount = () => {
    this.setState({ mang_gio_hang: data });

    // const str_mang_gio_hang =
    //   JSON.parse(localStorage.getItem("gio_hang")) || [];

    // this.setState({
    //   mang_gio_hang: str_mang_gio_hang,
    // });
  };

  // changeSoLuongPhimHandler = (id_phim, gia_tri) => {
  //   const arr_temp = [...this.state.mang_gio_hang];

  //   for (var i; i < arr_temp.length; i++) {
  //     if (id_phim === arr_temp[i].id) {
  //       arr_temp[i].soluong = gia_tri;

  //       this.setState({
  //         mang_gio_hang: arr_temp,
  //       });

  //       localStorage.setItem("gio_hang", JSON.stringify(arr_temp));
  //       break;
  //     }
  //   }
  // };

  removeItemHandler = (id_phim) => {
    const arr_temp = [...this.state.mang_gio_hang];

    for (var i = 0; i < arr_temp.length; i++) {
      if (id_phim === arr_temp[i].id) {
        arr_temp.splice(i, 1);

        this.setState({
          mang_gio_hang: arr_temp,
        });
      }
    }
  };

  render() {
    return (
      <Container className="w-50">
        {this.state.mang_gio_hang.map((item_phim) => {
          return (
            <ItemCart
              item_info={item_phim}
              remove_Item={this.removeItemHandler}
            />
          );
        })}
      </Container>
    );
  }
}
