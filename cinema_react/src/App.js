import "./App.css";
import HomePage from "./components/HomePage/HomePage";
// import MuaVe from "./components/MuaVe/MuaVe";
import FormBuy from "./components/FormBuy/FormBuy";
import Head from "./components/Head/Head";
import Menu from "./components/Menu/Menu";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import DetailFilm from './components/DetailFilm/DetailFilm';
// import Register from './components/Register/Register';
// import Login from './components/Login/Login';
// import FormLR from './components/FormLR/FormLR';
import Page404 from './components/Page404/Page404';
// import MenuLogin from './components/MenuLogin/MenuLogin';

function App() {
    return (
        <div className="App">
            <Head />
            <Menu />
            <Switch>
                {/* <Route path="/form-LR" component={FormLR}/> */}
                <Route path="/mua-ve" component={FormBuy} />
                <Route path="/chi-tiet/:idPhim" component={DetailFilm} />
                <Route exact path="/" component={HomePage} />
                <Route component={Page404}/>
            </Switch>
            {/* <HomePage />
            <MuaVe />
            <FormBuy /> */}
            <Footer />
            {/* <Register/> */}
            {/* <Login /> */}
            {/* <FormLR/> */}
            {/* <MenuLogin/> */}
        </div>
    );
}

export default App;
