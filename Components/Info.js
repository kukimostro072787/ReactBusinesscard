import React from "react";

export default function Info() {
  return (
    <div className="info-section">
      <div className="profile-picture">
        <img src="FERNANDA.jpeg" />
      </div>
      <div className="basic-info">
        <h3>Fernanda Arellano</h3>
        <p className="charge">Front End Developer</p>
        <a className="website">vostokmkt.com</a>
      </div>
      <div className="buttons">
        <a className="email-btn" href="mailto:fer.arellano.87@gmail.com">
          <img src="Mail.png" className="email-icon" />
          Email
        </a>
        <a className="linkedin-btn" href="https://linkedin.com/in/ferarelez/">
          <img src="linkedin.png" className="linkedin-icon" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
