import React, { Component } from "react";
import { Table, Col, Row, Button } from "react-bootstrap";

export default class ItemCart extends Component {
  buttonRemoveItemHandler = () => {
    var key = window.confirm(
      "Ban co chac chan muon xoa " +
        this.props.item_info.EN_name +
        " khoi gio hang khong?"
    );
    if (key) {
      this.props.remove_Item(this.props.item_info.EN_name);
    }
  };

  render() {
    return (
      <>
        {this.props.item_info ? (
          <Row>
            <Col md={2} className="my-4">
              <img
                src={this.props.item_info.urlImg}
                alt=""
                style={{ width: "100%", height: "100px" }}
              />
            </Col>
            <Col md={6} className="my-4">
              <h6 style={{ margin: "34px 0px" }}>
                {this.props.item_info.VN_name}
              </h6>
              {/* <div>Số lượng: {this.props.item_info.so_luong}</div> */}
            </Col>
            <Col md={4} className="my-4 ">
              <div style={{ fontWeight: "600", marginLeft: "55%" }}>
                {this.props.item_info.price}đ
              </div>
              <div style={{ float: "right", marginRight: "10%" }}>
                <button
                  className=" btn btn-link button-remove"
                  type="button"
                  onClick={this.buttonRemoveItemHandler}
                >
                  Remove
                </button>
              </div>
            </Col>
          </Row>
        ) : (
          <> </>
        )}
        
      </>
    );
  }
}
