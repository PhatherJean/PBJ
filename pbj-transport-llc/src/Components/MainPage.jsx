import React from "react";
import Typewriter from "typewriter-effect";

export default function MainPage(props) {
  return (
    <div className="homePage">
      <div className="homePageImg">
        <div>
          <div className="backgroundLogo">
            {/* This is where thr logo is going in the back ground */}
            <h2 className="type">At PBJ Transport </h2>

            <h2 className="type">
              <Typewriter
                options={{
                  strings: [
                    " Early is consider on-time",
                    "Safety is priority",
                    "Earning your business is our business",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
        </div>
      </div>
      <h1 style={{ color: "#2f4f4f", padding: "2%" }}>
        Welcome to <span className="pbj">PBJ Transport</span>
      </h1>
      <section className="bio">
        <div className="smallGuy">
          <h3 className="subtitle">Who is PBJ Transport?</h3>
          <p className="smallguy info">
            We are a small Florida trucking company built by professional truck
            drivers. With a combine experience of 5 years driving under our belt
            you can rest assured your load will get to its destination.
          </p>
        </div>
        <br />
        <div className="time">
          <h3 className="subtitle">Time is Money</h3>
          <p className="times info">
            We are a firm believer in time is of the essence. Getting your load
            to it's destination in a safe manner is our #1 priority.
          </p>
        </div>
        <br />
        <div className="world">
          <h4 className="subtitle">Service Area</h4>
          <p className="usa info">
            {" "}
            Your customers is in our service area if they are in the continguous
            48 states.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
