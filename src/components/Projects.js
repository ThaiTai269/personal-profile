import "animate.css";
import {
  Col,
  Container,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import YoutubeClone from "../assets/img//Youtube-clone.PNG";
import PostUI from "../assets/img/Post-UI.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import MusicApp from "../assets/img/music-app.PNG";
import ShopeeClone from "../assets/img/shopee-clone.PNG";
import WeatherApp from "../assets/img/weather-app.PNG";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const project = [
    {
      title: "Post UI",
      description: "Trang web hiển thị thông tin về những bài Post",
      imgURL: PostUI,
      URL: "https://js-post-ui-flax.vercel.app/",
    },
    {
      title: "Youtube Clone",
      description: "Trang web được clone dựa trên Youtube",
      imgURL: YoutubeClone,
      URL: "https://youtube-clone-pi-six.vercel.app/",
    },
    {
      title: "Shopee UI Clone",
      description:
        "Tranng web được clone lại từ trang thương mại điện tử Shopee",
      imgURL: ShopeeClone,
      URL: "https://shopeeclonesite.netlify.app/",
    },
    {
      title: "Weather App",
      description: "Web App hiển thị thông tin thời tiết",
      imgURL: WeatherApp,
      URL: "https://worldweather-app.netlify.app/",
    },
    {
      title: "Music App",
      description: "Web App phát nhạc theo danh sách tạo sẵn",
      imgURL: MusicApp,
      URL: "https://musicchill-app.netlify.app/",
    },
  ];
  return (
    <section className="project" id="project">
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
                  <h2>Project</h2>
                  <p>
                    There are all the projects that I did during my study and
                    research
                  </p>

                  <TabContainer id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                            Tab 3
                                            </Nav.Link>
                                        </Nav.Item>
                                        </Nav> */}

                    <TabContent>
                      <TabPane eventKey="first">
                        <Row>
                          {project.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </TabPane>
                      <TabPane eventKey="second"></TabPane>
                      <TabPane eventKey="third"></TabPane>
                    </TabContent>
                  </TabContainer>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
