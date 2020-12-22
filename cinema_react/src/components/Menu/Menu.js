import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./Menu.css";
import { NavLink } from "react-router-dom";

class Menu extends Component {
  state = {
    main_menu: [
      {
        link: "/mua-ve",
        title: "MUA VÉ",
      },
      {
        link: "/phim",
        title: "PHIM",
      },
      {
        link: "/goc-dien-anh",
        title: "GÓC ĐIỆN ẢNH",
      },
      {
        link: "/su-kien",
        title: "SỰ KIỆN",
      },
      {
        link: "/rap-gia-ve",
        title: "RẠP/GIÁ VÉ",
      },
      {
        link: "/ho-tro",
        title: "HỖ TRỢ",
      },
      {
        link: "/thanh-vien",
        title: "THÀNH VIÊN",
      },
    ],
  };
  render() {
    return (
      <Navbar bg="dark" variant="dark" className='main-menu'>
        {this.state.main_menu.map((item) => {
          return (
            <Nav className="m-auto navbar-menu" key={item.title}>
              <NavLink to={item.link} className="list-menu">
                {item.title}
              </NavLink>
            </Nav>
          );
        })}
      </Navbar>
    );
  }
}

export default Menu;
