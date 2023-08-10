import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgReact from "../assets/img/react-seeklogo.com.svg";
import imgHTML from "../assets/img/html5-without-wordmark-color.svg";
import imgRedux from "../assets/img/redux-seeklogo.com.svg";
import imgCSS from "../assets/img/css-3-logo-svgrepo-com.svg";
import imgTailwind from "../assets/img/tailwindcss-icon.svg";
import imgJavascript from "../assets/img/javascript-js-seeklogo.com.svg";
import imgTypescript from "../assets/img/typescript-official-svgrepo-com.svg";
import imgAnt from "../assets/img/ant-design-seeklogo.com.svg";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              {/* <p>
                Having a solid knowledge of HTML, CSS, JAVASCRIPT and REACTJS, I
                always try to hone my skills every day.
              </p> */}
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={imgHTML} alt="Skill-img" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={imgCSS} alt="Skill-img" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={imgJavascript} alt="Skill-img" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={imgTailwind} alt="Skill-img" />
                  <h5>TailwindCSS</h5>
                </div>
                <div className="item">
                  <img src={imgAnt} alt="Skill-img" />
                  <h5>Ant Design</h5>
                </div>
                <div className="item">
                  <img src={imgReact} alt="Skill-img" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={imgRedux} alt="Skill-img" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={imgTypescript} alt="Skill-img" />
                  <h5>Typescript</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
