import React, { useState } from "react";
import {
  // TabContent,
  // TabPane,
  // Nav,
  // NavItem,
  // NavLink,
  // Card,
  // Button,
  Row,
  Col,
  Tabs,
  Tab,
  Container,
  Button,
} from "react-bootstrap";
// import classnames from "classnames";
import TabBarItem from "./TabBarItem";
// import DetailFilm from '../DetailFilm/DetailFilm';
import data from "../../assest/dummydata/data"; //! asseTS

import "./TabBarItem.css";

import c7 from "../../assest/img/c7.jpg";
import c8 from "../../assest/img/c7.png";
import c9 from "../../assest/img/c8.jpg";
import c10 from "../../assest/img/c9.png";
import c11 from "../../assest/img/c10.jpg";
import c12 from "../../assest/img/c11.jpg";

const listPhimDangChieu = data; //! mô phỏng lấy database

const listPhimSapChieu = [
  {
    img: c7,
    tenPhimEN: "Demon Slayer The Movie: Mugen Train",
    tenPhimVN: "Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận",
    id: 7788899445,
  },
  {
    img: c8,
    tenPhimEN: "Riam Fighting Angel",
    tenPhimVN: "Riam: Nữ Quái Nổi Loạn",
    id: 1122334455,
  },
  {
    img: c9,
    tenPhimEN: "Collectors",
    tenPhimVN: "Kẻ Săn Mộ",
    id: 7788994455,
  },
  {
    img: c10,
    tenPhimEN: "The Banishing",
    tenPhimVN: "Trục quỷ",
    id: 2255889966,
  },
  {
    img: c11,
    tenPhimEN: "Recon",
    tenPhimVN: "Đội Do Thám",
    id: 3366997744,
  },
  {
    img: c12,
    tenPhimEN: "",
    tenPhimVN: "Hoa Phong Nguyệt Vũ",
    id: 1144778866,
  },
];

function ControlledTabs() {
  const [key, setKey] = useState("phimdangchieu");

  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(key) => setKey(key)}
        className="tab-homepage"
      >
        <Tab
          className="tabs-chuyen"
          eventKey="phimdangchieu"
          title="Phim đang chiếu"
        >
          <Row>
            {listPhimDangChieu.map((phim) => {
              return (
                <Col sm="12" md="6" lg="4" key={phim.tenPhimEN}>
                  <TabBarItem phim={phim} />
                </Col>
              );
            })}
          </Row>
        </Tab>
        <Tab
          className="tabs-chuyen"
          eventKey="phimsapchieu"
          title="Phim sắp chiếu"
        >
          <Row>
            {listPhimSapChieu.map((film) => {
              return (
                <Col sm="12" md="6" lg="4" key={film.tenPhimEN}>
                  <TabBarItem phim={film} />
                </Col>
              );
            })}
          </Row>
        </Tab>
      </Tabs>

      <div style={{ marginLeft: "90%" }}>
        <Button>Xem Them</Button>
      </div>
    </Container>
  );
}

export default ControlledTabs;
