import React from "react";
import logo from "../picts/apple-touch-icon.png";
import pict from "../picts/bridge.jpg";
export default function MainPage(props) {
  return (
    <div className="homePage">
      <h1>Main Page</h1>
      <div className="homePageImg">
        <div>
          Welcome to <span className="pbj">PBJ Transport</span>
          <div className="backgroundLogo">
            {/* This is where thr logo is going in the back ground */}
            <p>Still under construction we will be back up soon </p>
          </div>
        </div>
      </div>
      <section className="bio">
        <div>
          <img src={logo} alt="logo" />
          <p className="bio-info">
            Welcome to <strong>PBJ Transport</strong> founded in end of the year
            2020. We have came a long way from just being another driver. To
            owning our very own company as of right now we are small. This is
            only temporary because in due time we will grow and continue to
            stride to bring our customers and partners the best service we
            possibly can provide.
          </p>
        </div>
        <div>
          <img src={pict} alt="overview" />
          <p className="bio-info">
            The possibilities are endless and the potential growth is infinite.
            We strive to stand out and not be the average truck company.{" "}
            <strong>PBJ Transport</strong> will strive and close the gap between
            us and the more popular freight companies.While also building
            repoire with our clients as well as our drivers.
          </p>
        </div>
      </section>
    </div>
  );
}
