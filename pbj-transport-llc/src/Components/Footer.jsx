import React from "react";
import logo from "../picts/logo.PNG";

export default function Footer() {
  return (
    <section className="footer">
      <div className="foot-logo">
        <img className="logo" src={logo} alt={logo} />
      </div>
      <div className="contact-info">
        <h4>Contact</h4>
        <p>
          3709 NW 79th Ave <br />
          Suite 245 #2611 <br />
          Miami, Florida 33166
        </p>
        <a
          href="tel:8337258726"
          style={{ textDecoration: "none", color: "#2f4f4f" }}
        >
          {" "}
          Call (833)-725-8726
        </a>
        <br />
        <a
          href="email:pbj@pbjtransoort.org"
          style={{ textDecoration: "none", color: "#2f4f4f" }}
        >
          {" "}
          Email Us
        </a>
        <footer>
          <p>Copyright © 2021 PBJ Transport</p>
        </footer>
      </div>
    </section>
  );
}
