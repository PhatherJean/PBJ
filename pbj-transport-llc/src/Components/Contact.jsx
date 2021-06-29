import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  function email(e) {
    e.preventDefault(e);

    emailjs
      .sendForm("gmail", "pbj-first", e.target, "user_XeT4mWFWu8frrLgB7fxaF")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.reset();
  }
  return (
    <div>
      <h1 className="subtitle">Contact Us</h1>
      <div className="contact">
        {/* image goes here for contacts */}
        <br />
        <form className="contact-form" onSubmit={email}>
          <label htmlFor="name">
            Name
            <input id="name" name="name" required placeholder="Full Name" />
          </label>
          <label htmlFor="subject">
            Subject
            <input id="subject" name="subject" required placeholder="Subject" />
          </label>
          <label htmlFor="phone">
            Phone
            <input id="phone" name="phone" placeholder="Optional" />
          </label>
          <label htmlFor="email">
            E-mail
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="E-mail"
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              required
              placeholder="Message"
            />
          </label>
          <br />
          <label htmlFor="submit">
            <input id="submit" type="submit" value="Submit" />
          </label>
        </form>
      </div>
    </div>
  );
}
