import React, { Component } from "react";
import { Link } from "react-router-dom";

// import axios from "axios";
import { Container, Button, Col, Row, Breadcrumb } from "react-bootstrap";
import { Button as MButton } from "@material-ui/core";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// ?Giả vờ như import vào database
import data from "../../assest/dummydata/data";
import "./DetailFilm.css";

import phim1 from "../../assest/img/c11.jpg";
// import phim2 from '../../assest/img/c12.jpg';
import CommentFilm from "../CommentFilm/CommentFilm";

class DetailFilm extends Component {
  state = {
    dataPhim: null,
  };

  componentDidMount() {
    const idPhim = this.props.match.params.idPhim;

    const dataPhim = data.find((phim) => String(phim.id) === String(idPhim));
    // console.log(dataPhim);

    this.setState({ dataPhim });
  }

  render() {
    return (
      <Container>
        <Col>
          {this.state.dataPhim ? (
            <>
              <Breadcrumb>
                <Breadcrumb.Item className="breadcrumb-item" href="#">
                  Trang Chủ
                </Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item" href="#">
                  Đặt Vé
                </Breadcrumb.Item>
                <Breadcrumb.Item className="breadcrumb-item" active>
                  {this.state.dataPhim.tenPhimVN}
                </Breadcrumb.Item>
              </Breadcrumb>

              <Row className="mt-3">
                <Col md={8}>
                  <Row>
                    <Col md={4} style={{ margin: "60px 0px" }}>
                      <img
                        className="ml-4"
                        style={{
                          width: "100%",
                          height: "85%",
                          borderRadius: "4px",
                        }}
                        src={this.state.dataPhim.img}
                        alt={this.state.dataPhim.tenPhimEN}
                      />
                    </Col>
                    <Col md={8}>
                      <div className="list_info" style={{ margin: "0px 30px" }}>
                        <h3>{this.state.dataPhim.tenPhimEN}</h3>
                        <h3>{this.state.dataPhim.tenPhimVN}</h3>
                        <li>
                          <SlowMotionVideoIcon />
                          {this.state.dataPhim.tLuong}
                        </li>

                        <li>
                          Thể loại: <span>{this.state.dataPhim.theLoai}</span>
                        </li>
                        <li>
                          Đạo diễn: <span>{this.state.dataPhim.daoDien}</span>
                        </li>
                        <li>
                          Diễn viên: <span>{this.state.dataPhim.dienVien}</span>
                        </li>
                        <li>
                          Nhà sản xuất:{" "}
                          <span>{this.state.dataPhim.nhaSXuat}</span>
                        </li>
                        <li>
                          Quốc gia: <span>{this.state.dataPhim.quocGia}</span>
                        </li>
                        <li>
                          Ngày: <span>{this.state.dataPhim.date}</span>
                        </li>
                      </div>
                      <div>
                        <Link to={"/gio-hang/" + this.state.id}>
                          <MButton
                            variant="contained"
                            color="primary"
                            className="m-2"
                            startIcon={<ConfirmationNumberIcon />}
                          >
                            Mua phim
                          </MButton>
                        </Link>
                        <MButton
                          variant="contained"
                          color="secondary"
                          className="m-2"
                          startIcon={<AddShoppingCartIcon />}
                        >
                          Thêm vào giỏ hàng
                        </MButton>
                      </div>
                    </Col>
                  </Row>
                  <div>
                    <h3 className="border-bt">Nội Dung Phim</h3>
                    <p>{this.state.dataPhim.nDung}</p>
                  </div>
                </Col>
                <Col md={4}>
                  <h3 className="border-bt">Phim Đang Chiếu</h3>
                  <div>
                    <img src={phim1} alt="" />
                    <h4>Wonder Woman 1984</h4>
                  </div>
                </Col>
              </Row>
            </>
          ) : null}
        </Col>

        <Button
          variant="warning"
          className="mb-2"
          onClick={this.props.history.goBack}
        >
          Quay lại trang trước
        </Button>

        <CommentFilm />
      </Container>
    );
  }
}

export default DetailFilm;
