import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Enes Şanlı </span>
            from <span className="purple"> Ankara, Turkey.</span> I am a junior <span className="purple">computer engineering</span> student at <span className="purple">Middle East Technical University.</span>
            <br />
            <br />
I am currently doing an internship in the field of <span className="purple">Human Robot Interactions</span> at <span className="purple">METU KOVAN Research Lab.</span> At the same time, as a <span className="purple">TÜBİTAK Star Scholar</span>, I am working on creating the <span className="purple">Digital Twin for HPCs</span> within the scope of the <span className="purple">Sabanci University - SparCity</span> project.
          </p>


        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
