import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
// import MuaVe from "./components/MuaVe/MuaVe";
import FormBuy from "./components/FormBuy/FormBuy";
import Head from "./components/Head/Head";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import DetailFilm from "./components/DetailFilm/DetailFilm";
// import Register from './components/Register/Register';
// import Login from './components/Login/Login';
// import FormLR from './components/FormLR/FormLR';
import Page404 from "./components/Page404/Page404";
// import MenuLogin from './components/MenuLogin/MenuLogin';
import Test from "./components/test/Test";
// import BuyCard from "./components/BuyCard/BuyCard"
import Test1 from "./components/Test1";
// import AboutCinema from "./components/AboutCinema/AboutCinema";
import TabBar from "./components/TabBar/TabBar";
import FormCart from "./components/FormCart/FormCart";
import Order from "./components/Order/Order";
import Profile from "./components/Profile/Profile";

export default class App extends Component {
  state = {
    cart: [],
    user: "",
    balance: 0,
    purchasedFilms: [],
  };

  loginSuccess = (user) => {
    console.log(user);
    this.setState({ user: user });
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ user: "" });
  };

  addToCart = (phim) => {
    // console.log(`Xử lý them vào giỏ hàng ở đây
    //   lúc chuyển sang trang giỏ hàng thì truyền cái this.state.cart vào.
    //   add thì add cái idphim thôi, tới lúc sang trang giỏ hàng thì axios get phim,
    //   hoặc k thích thì cứ add là add nguyên cái thông tin phim lên cũng được`);
    // console.log(phim);
    const newCart = [...this.state.cart];
    const phimTrongList = newCart.find((pTL) => pTL._id === phim._id);

    if (phimTrongList) {
      return;
    }

    newCart.push(phim);
    this.setState({ cart: newCart });

    console.log(this.state.cart);

    localStorage.setItem("gio_hang", JSON.stringify(newCart));
  };

  removeItemFromCart = (phim) => {
    //   viết xử lý bỏ 1 phim ở đây

    const cart_temp = [...this.state.cart];

    for (var i = 0; i < cart_temp.length; i++) {
      if (phim === cart_temp[i].EN_name) {
        cart_temp.splice(0, 1);

        this.setState({ cart: cart_temp });
        localStorage.setItem("gio_hang", JSON.stringify(cart_temp));
      }
    }
  };

  updateBalance = (balance) => {
    const newBalance = [...this.state.balance];

    newBalance += balance;

    this.setState({ balance: newBalance });
  };

  componentDidMount = () => {
    const cart_str = JSON.parse(localStorage.getItem("gio_hang")) || [];
    this.setState({ cart: cart_str });

    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:4000/auto-login", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          this.loginSuccess(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  successBuy = () => {
    this.setState({ cart: [] });
    localStorage.removeItem("gio_hang");
  };

  render() {
    // console.log(this.state.purchasedFilms);
    return (
      <div className="App">
        <Head
          loginSuccess={this.loginSuccess}
          logout={this.logout}
          user={this.state.user}
        />
        <Menu />
        <Switch>
          {/* <Route path="/form-LR" component={FormLR}/> */}
          <Route path="/mua-ve" component={TabBar} />
          <Route
            path="/chi-tiet/:idPhim"
            render={(props) => (
              <DetailFilm
                {...props}
                addToCart={this.addToCart}
                user={this.state.user}
              />
            )}
          />
          <Route exact path="/" component={HomePage} />
          <Route path="/test" component={Test} />
          {/* props laf props của render(hítory, params....) */}
          <Route path="/trang-ca-nhan" component={Profile} />
          <Route
            path="/lich-su"
            render={(props) => <Order {...props} user={this.state.user} />}
          />
          <Route
            path="/gio-hang"
            render={(props) => (
              <FormCart
                {...props}
                updateBLC={this.updateBalance}
                cart={this.state.cart}
                removeCart={this.removeItemFromCart}
                user={this.state.user}
                successBuyCart={this.successBuy}
              />
            )}
          />
          {/* <Route path='/about' component={AboutCinema}/> */}
          <Route component={Page404} />
        </Switch>
        {/* <HomePage />
            <MuaVe />
            <FormBuy /> */}
        <Footer />
        {/* <Register/> */}
        {/* <Login /> */}
        {/* <FormLR/> */}
        {/* <MenuLogin/> */}
        {/* <Test1/> */}

        {/* <CommentFilm/> */}
        {/* <FormCart/> */}
      </div>
    );
  }
}
