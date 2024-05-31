import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Siz </span>
            from <span className="purple"> Sweden.</span>
            <br />
            I am a 15 year old dropshipper and programmer.
            <br />
            I'm from Sweden and still going to school.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Dropshipping
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering new things 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            ""Create with passion, overcome with resilience, and discover limitless potential.""{" "}
          </p>
          <footer className="blockquote-footer">Siz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
