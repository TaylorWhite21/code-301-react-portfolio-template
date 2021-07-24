/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import promo1 from "assets/img/theme/moonSS.png";
import cardImg from "assets/img/theme/projectSS.png";

// CSS
import "assets/css/Landing.css";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col id="portfolioHeader">
                      <h1 className="display-3 text-white" >
                        Taylor White's Portfolio
                      </h1>
                      <p className="lead text-white">
                        Tech and science are like magic in a fantasy world. We can do and make anything that we can imagine, it might not be instantaneous but in contrast to the age of the universe, we are moving at a fast pace. I want to use this magic to change peoples lives for the better in any way possible.
                      </p>

                      <h2 className="display-3 text-white" id="projectsHeader">My Projects</h2>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Project To The Moon
                          </h6>
                          <p className="description mt-3">
                            This is a single level micro game made in Unity. The goal is to fly your rocket to the exit while avoiding obstacles.
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href=""
                            onClick={() => window.open("https://penkey21.itch.io/project-to-the-moon", "_blank")}
                          >
                            Play it here!
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            Code Fellows Palace Casino
                          </h6>
                          <p className="description mt-3">
                            Group final project from code 201. Slot machine that has a jackpot and tracks your score. You start with 10,000 coins and try to earn as many more as possible. This was completed in one week of 3 hour days.
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={() => window.open("https://ryans-angels.github.io/cf-palace/", "_blank")}
                          >
                            Check it out
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            301 final project
                          </h6>
                          <p className="description mt-3">
                            Pleace holder for 301 final
                          </p>

                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>Project To The Moon</h3>
                    <p>
                      This was my first coding project I did when I first started getting into programming. I've always wanted to learn how to make a video game and decided to finally start learning how during lockdown.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Made in Unity
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Used free premade assets</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Still a work in progress
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Code Fellows Palace Casino</h3>
                    <p className="lead">
                      This was our final project in code 201 for Code Fellows. We had 8, 3 hour, days with a team of 3 to create a website utilizing what we learned.
                    </p>
                    <p>
                      The website uses vanilla JavaScript, HTML, and CSS to make a slot machine game with a payout system and leaderboard.
                    </p>

                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">My Background</h2>
                  <p className="lead text-muted">
                    Army veteran and Network Engineer turning Software Developer with the goal of opening a coding charity and being a game developer.
                  </p>
                </Col>
              </Row>
              
            </Container>
          </section>

        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
