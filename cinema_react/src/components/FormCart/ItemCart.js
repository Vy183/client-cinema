import React, { Component } from "react";
import { Table, Col, Row } from "react-bootstrap";

export default class ItemCart extends Component {
  buttonRemoveItemHandler = () => {
    var key = window.confirm(
      "Ban co chac chan muon xoa " +
        this.props.item_info.ten_phim +
        " khoi gio hang khong?"
    );
    if (key) {
      this.props.remove_Item(this.props.item_info.id);
    }
  };

  render() {
    return (
      <>
        {this.props.item_info ? (
          <Row>
            <Col md={2} className="my-4">
              <img
                src={this.props.item_info.img}
                alt=""
                style={{ width: "100%", height: "100px" }}
              />
            </Col>
            <Col md={6} className="my-4">
              <h6 style={{ margin: "34px 0px" }}>
                {this.props.item_info.tenPhimVN}
              </h6>
              {/* <div>Số lượng: {this.props.item_info.so_luong}</div> */}
            </Col>
            <Col md={4} className="my-4">
              <div style={{ fontWeight: "600" }}>
                {" "}
                Thành tiền: {this.props.item_info.thanh_tien}
              </div>

              <div style={{float: 'right', marginRight: '26%'}}>
                <button className=' btn btn-link button-remove'
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
