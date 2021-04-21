import "./App.css";
import MainPage from "./Components/MainPage";
import { NavLink, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Users from "./Components/Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="navi" to="/">
          Home
        </NavLink>
        <NavLink className="navi" to="/about">
          About Us
        </NavLink>
        <NavLink className="navi" to="/contacts">
          Contacts
        </NavLink>
        <NavLink className="navi" to="/users">
          Users
        </NavLink>
      </header>
      <div>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contacts">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default App;
