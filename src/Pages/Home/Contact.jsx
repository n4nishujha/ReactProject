import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <h2 className="common-heading">
        <b>Feel Free to Contact us</b>
      </h2>

      <iframe
        src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15283620.601698408!2d72.10720850246008!3d20.736494466381487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5db65f6af0f%3A0xb29ad5bc8aabd76a!2sNutanTek%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1768045355598!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="contact-container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xdaanlky"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            />

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
