import React from "react";
import "./contact.css";

import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="section-bg">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-container">
        <div className="contact-left" data-aos="fade-up">
          <form action="" className="form-bg">
            <div className="form-group-wrapper">
              <div className="form-group">
                <label htmlFor="first_name" className="form-group-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="form-group-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name" className="form-group-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="form-group-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-group-label">
                Email
              </label>
              <input type="text" name="email" className="form-group-input" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-group-label">
                Message
              </label>
              <textarea
                name="message"
                rows="10"
                className="form-group-input"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
        <div className="contact-right" data-aos="fade-up">
          <a className="icon-div" href="tel:+917209602458">
            <div className="sm-icon-div">
              <FaPhone className="sm-icons" />
            </div>
            <span className="contact-text">Phone</span>
          </a>

          <a className="icon-div" href="mailto:razashoaib270@gmail.com">
            <div className="sm-icon-div">
              <IoMail className="sm-icons" />
            </div>

            <span className="contact-text">Email</span>
          </a>

          <a
            className="icon-div"
            href="https://maps.app.goo.gl/mEQuTFcSZa6JEPth8"
          >
            <div className="sm-icon-div">
              <FaMapMarkerAlt className="sm-icons" />
            </div>

            <span className="contact-text">Address</span>
          </a>

          <a
            className="icon-div"
            href="https://www.linkedin.com/in/razashoaib270"
            target="_blank"
            rel="noreferrer"
          >
            <div className="sm-icon-div">
              <FaLinkedin className="sm-icons" />
            </div>
            <span className="contact-text"> LinkedIn </span>
          </a>

          <a
            className="icon-div"
            href="https://github.com/Shoaib-raza-01"
            target="_blank"
            rel="noreferrer"
          >
            <div className="sm-icon-div">
              <FaGithub className="sm-icons" />
            </div>
            <span className="contact-text">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
