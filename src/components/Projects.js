import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

 

  return (
    <section className="project" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>ABOUT TED</h2>
                  <p>
                    An idea can blossom into something that can bring
                    unspeakable joy or misery to millions. Every human endeavour
                    no matter how small or great began with a simple idea. This
                    philosophy is at the heart of TED whose mission is to spread
                    ‘ideas worth spreading’ to the masses.
                    
                  </p>
                  <p>
                    TED is a media
                    organization devoted to spreading ideas. Owing to its
                    Silicon Valley origins TED's early emphasis was on
                    technology, entertainment and design,but it has since
                    broadened its focus to include talks on many scientific,
                    cultural, humanitarian and academic topics. Each Ted talk is
                    given by an expert in their particular field. Past speakers
                    include Bill Clinton, Al Gore, Gordon Brown, David Cameron,
                    Billy Graham, Richard Dawkins, Bill Gates, Bono, Google
                    founders Larry Page and Sergey Brin, and many Nobel Prize
                    winners.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
