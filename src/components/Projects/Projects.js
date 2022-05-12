import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SimpleCalculator from "../../Assets/Projects/SimpleCalculator.jpg"
import weatherApp from "../../Assets/Projects/weatherApp.jpg"
import formvalid from "../../Assets/Projects/formvalid.jpg"

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
              imgPath={SimpleCalculator}
              isBlog={false}
              title="Simple Calculator"
              description="A Simple Calculator created using HTML,CSS,JavaScript.It performs basic arithemetic operations like Addition, Substraction, Division and multiplication."
              link="https://github.com/Flyingsolo-ui/https---github.com-Flyingsolo-ui-CalculatorApp_JS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp}
              isBlog={false}
              title="Weather App"
              description="JavaScript Weather App is a great project that helps to find out the weather of any location.

              In this project made here, you will be able to know the temperature, wind speed, sky condition, etc. First I created a box that contains an input box. If you input the name of any city in the input box, you will get all the information.
              
              You will see all the information in another box. With the help of this simple weather application, you can easily know the weather of any city in the world."
              link="https://github.com/Flyingsolo-ui/Weather"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formvalid}
              isBlog={false}
              title="Form-Validation"
              description="Many websites utilize form validation for client-side validation of user details, card details, address details, and other information. If a mandatory input field name exists, the user can type a number, leave the field blank, type only one letter, and so on. All of these validations are simple to implement using JavaScript. Let’s look at an example of a simple form validation project. HTML elements will be required as well, as is customary."
              link="https://github.com/Flyingsolo-ui/https---github.com-Flyingsolo-ui-form-validation"
            />
          </Col>

          

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
