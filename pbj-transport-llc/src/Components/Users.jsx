import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";

const Users = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Welcome to PBJ Transport LLC</h2>
      <h4>We welcome you </h4>

      <>
        <Link to={`${url}/new`}>New Drivers</Link>
        <br />
        <Link to={`${url}/experienced`}>Experienced Drivers</Link>
      </>

      <Switch>
        <Route exact path={`${path}/experienced`}>
          <h3>Expericened Drivers</h3>
        </Route>
        <Route path={`${path}/new`}>
          <h3>New Drivers</h3>
        </Route>
      </Switch>

      <section className="main-userpage">
        <div className="image-container user-image"></div>
      </section>
    </div>
  );
};
export default Users;
