import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="contact-page-container">

      <div
        className="LI-profile-badge"
        data-version="v1"
        data-size="medium"
        data-locale="en_US"
        data-type="vertical"
        data-theme="light"
        data-vanity="vivek1401"
      >
        <a
          className="LI-simple-link"
          href="https://in.linkedin.com/in/vivek1401?trk=profile-badge"
        >
          Vivek
          Aggarwal
        </a>
      </div>

      <div className="contact-page-form-container">
        <form id="contact" action="" method="post">
          <fieldset>
            <input placeholder="Your name" type="text" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Email Address" type="email" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number" type="tel" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your Message Here...." required />
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>

      </div>
    </div>
  );
};

export default Contact;
