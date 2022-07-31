import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img1 from '../images/img-1.jpg';
import Img2 from '../images/img-2.jpg';
import Img3 from '../images/img-3.jpg';
import Img4 from '../images/of-2.jpg';
import Img5 from '../images/of-1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function index() {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  
  return (
    <div>
       <Container>
          <div className="main">
            <div className="section-1" data-aos="fade-left">
              <h2 className="hover">
                {" "}
                Lorem ipsum elsdolor sit amet,{" "}
                <span>
                  <img data-aos="flip-up" src={Img1} />
                </span>{" "}
                adipiscing elit. Donec interdum pharetra
              </h2>
            </div>
            <div className="section-2">
              <Row>
                <Col xs={12} md={6}>
                  <div className="">
                    <div className="element" data-aos="fade-up">
                      <h2 data-aos="zoom-in">
                        Lorem ipsum dolor sit amet, adipiscing elit.
                      </h2>
                      <p data-aos="fade-up">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        interdum pharetra erat at efficitur. Etiam a quam urna. Aenean
                        pulvinar nunc in mattis tincidunt
                      </p>
                    </div>
                    <div className="element" data-aos="fade-up">
                      <h2 data-aos="zoom-in">
                        Lorem ipsum dolor sit amet, adipiscing elit.
                      </h2>
                      <p data-aos="fade-up">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        interdum pharetra erat at efficitur. Etiam a quam urna. Aenean
                        pulvinar nunc in mattis tincidunt
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={1}></Col>

                <Col
                  xs={12}
                  md={5}
                  className="d-flex justify-content-center"
                  data-aos="slide-right"
                >
                  <div className="img-2 " data-aos="slide-left">
                    <img src={Img2} />
                  </div>
                  <div className="img-3" data-aos="slide-left">
                    <img src={Img3} />
                  </div>
                </Col>
              </Row>
            </div>

            <div className="section3">
              <Row>
                <Col
                  xs={12}
                  md={3}
                  className="d-flex justify-content-center"
                  data-aos="slide-left"
                >
                  {" "}
                  <img src={Img4} className="cont-img" />
                </Col>
                <Col>
                  <div className="common">
                    <div xs={12} md={6} className="content ">
                      <h2 data-aos="zoom-in">
                        Lorem ipsum dolor sit amet, <br />
                        adipiscing elit.
                      </h2>
                      <p data-aos="zoom-in">
                        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                        Donec interdum pharetra erat at efficitur. Etiam a quam urna.
                        Aenean pulvinar nunc in mattis tincidunt
                      </p>
                    </div>

                    <p className="content2" data-aos="zoom-in">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      interdum pharetra erat at efficitur. Etiam a quam urna. Aenean
                      pulvinar nunc in mattis tincidunt
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={3}
                  className="d-flex justify-content-center"
                  data-aos="slide-right"
                >
                  {" "}
                  <img src={Img5} className="bot-img" />
                </Col>
              </Row>
            </div>
          </div>
        </Container>;
    </div>
  )
}
export default index;
