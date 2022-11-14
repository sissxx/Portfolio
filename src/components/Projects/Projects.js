import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import proj from "../../assets/project.jpg";
import proj1 from "../../assets/project1.jpg";
import proj2 from "../../assets/project2.jpg";
import proj3 from "../../assets/project3.jpg";
import proj4 from "../../assets/project4.jpg";
import proj5 from "../../assets/project5.jpg";


import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio",
      description: "ReactJS",
      imgUrl: proj,
      link : "https://github.com/sissxx/Portfolio"
    },
    {
      title: "Furniture Store",
      description: "DOM Manipulation",
      imgUrl: proj1,
      link : "https://github.com/sissxx/FurnitureStore"
    },
    {
      title: "Crypto Bye and Sell",
      description: "Express.js, MongoDB",
      imgUrl: proj4,
      link : "https://github.com/sissxx/Crypto"


    },
    {
      title: "Computer and Mobile Services",
      description: "DOM Manipulation",
      imgUrl: proj2,
      link : "https://github.com/sissxx/MobileService"

    },
    {
      title: "Crypro live",
      description: "Design & Development",
      imgUrl: proj5,
      link : "https://github.com/sissxx/FurnitureStore"

    },
    {
      title: "To Do List",
      description: "DOM Manipulation",
      imgUrl: proj3,
      link : "https://github.com/sissxx/FurnitureStore"

    }
   
  ];

  return (
    <section className="project" id="project">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
