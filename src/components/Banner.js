import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-bootstrap";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    // "Web Developer",
    "a Front-End Developer.",
    "an Fresher Developer.",
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Tai`}{" "}
                    <div
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate={[
                        "Fresher Developer",
                        "Front-End Developer ",
                      ]}
                    >
                      <span className="wrap">{text}</span>
                    </div>
                  </h1>
                  {/* <p>With the knowledge of what's in the school and courses, I've always wanted to become a Front-End Developer. Having a solid knowledge of HTML, CSS, JAVASCRIPT and REACTJS, plus skills I hone every day. I always want to give my best to help the company grow and achieve for myself. I hope to join the company in professional working environment to improve, develop my programming skills as well as complete myself.</p> */}
                  <p>
                    I am a Bachelor of Information Technology from Van Lang
                    University. I aim to use my knowledge of programming and
                    algorithms and always challenge myself to create great and
                    outstanding products in a dynamic, professional environment.
                    I am always eager to learn from experienced people to
                    improve my skills.
                  </p>
                  <Nav>
                    <NavLink href="#connect">
                      <button
                        className="vvd"
                        onClick={() => {
                          console.log("connect");
                        }}
                      >
                        Let’s Connect <ArrowRightCircle size={25} />
                      </button>
                    </NavLink>
                  </Nav>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
