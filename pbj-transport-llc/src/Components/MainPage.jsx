import React from "react";
import clock from "../picts/clock.jpg";
export default function MainPage(props) {
  return (
    <div className="homePage">
      <div className="homePageImg">
        <div>
          <div className="backgroundLogo">
            {/* This is where thr logo is going in the back ground */}
          </div>
        </div>
      </div>
      <h1 style={{ color: "#2f4f4f", padding: "2%" }}>
        Welcome to <span className="pbj">PBJ Transport</span>
      </h1>
      <section className="bio">
        <div>
          <img src={clock} alt="Clock" />
          <p className="bio-info">
            From pickup to dropoff <strong>PBJ Transport</strong> got you
            covered. We will get it there so you have one less task to worry
            about.
          </p>
        </div>
      </section>
    </div>
  );
}
