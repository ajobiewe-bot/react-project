import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="card-img-overlay">
        <small>
          This project was coded by zainab Oyeniran and is {""}
          <a
            href="https://github.com/ajobiewe-bot/weather-app-react.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </small>
      </div>
    </div>
  );
}
