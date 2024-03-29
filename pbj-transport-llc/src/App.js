import "./App.css";
import logo from "./picts/logo.PNG";
import MainPage from "./Components/MainPage";
import { NavLink, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Users from "./Components/Users";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          className="logo"
          src={logo}
          alt="robson-hatsukami-morgan-NKr0qBAkU4s-unsplash"
        />
        <NavLink className="navi" to="/">
          Home
        </NavLink>
        <NavLink className="navi" to="/contact">
          Contact
        </NavLink>
        <NavLink className="navi" to="#">
          Users
        </NavLink>
      </header>
      <div>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
export default App;
