import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SparCity"
              description="In this work, I am creating a Digital Twin for HPCs. Also i am trying to predict future hardware values using machine learning algorithms on these digital twins. The GitHub link is inactive because the work is still in progress. I will update it in the future."
           

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Human Robot Interactions"
              description="I have done research on how heartbeats and eye gaze affect human emotion. Then I tried to detect these two non verbal ques only through the camera. Finally, I did research on how the robot would respond to these emotions. Check out the GitHub link for more information."
              ghLink="https://github.com/enessanli/HRI"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Barcode Decoder"
              description="I struggled with reading barcodes in C++ using the ZBAR and Zxing libraries. In the meantime, I made comparisons according to the accuracy and speed of decoding the libraries within themselves. Check out the GitHub link for more information."
              ghLink="https://github.com/enessanli/Barcode_Decoder"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
