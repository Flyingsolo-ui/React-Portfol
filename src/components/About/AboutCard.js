import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chintesh Lute </span>
            from <span className="purple"> Maharashtra,India </span>
            <br />
            I've completed my gradutation in Computer Science from Rajiv Gandhi College Of Research & Technologies, Chandrapur.
      
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Achieve results, not phases "{" "}
          </p>
          <footer className="blockquote-footer">Jeroen de Flander</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
