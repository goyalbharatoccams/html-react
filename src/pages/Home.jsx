import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png';

const Home = () => {
  return (
    <main className="flex-shrink-0">
      {/* Header */}
      <header className="py-5">
        <Container className="px-5 pb-5">
          <Row className="gx-5 align-items-center">
            <Col className="col-xxl-5">
              {/* Header text content */}
              <div className="text-center text-xxl-start">
                <Badge bg="primary" className="bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase">Design &middot; Development &middot; Marketing</div>
                </Badge>
                <div className="fs-3 fw-light text-muted">I can help your business to</div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">Get online and grow fast</span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link to="/resume" className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Resume</Link>
                  <Link to="/projects" className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">Projects</Link>
                </div>
              </div>
            </Col>
            <Col className="col-xxl-7">
              {/* Header profile picture */}
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <img className="profile-img" src={profileImage} alt="Profile" />
                  <div className="dots-1">
                    <svg width="46" height="46" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#fff" fillRule="evenodd">
                        <path d="M0 46h9.5V0H0zM23 46h9.5V0H23z" />
                      </g>
                    </svg>
                  </div>
                  <div className="dots-2">
                    <svg width="46" height="46" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#fff" fillRule="evenodd">
                        <path d="M0 46h9.5V0H0zM23 46h9.5V0H23z" />
                      </g>
                    </svg>
                  </div>
                  <div className="dots-3">
                    <svg width="46" height="46" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#fff" fillRule="evenodd">
                        <path d="M0 46h9.5V0H0zM23 46h9.5V0H23z" />
                      </g>
                    </svg>
                  </div>
                  <div className="dots-4">
                    <svg width="46" height="46" xmlns="http://www.w3.org/2000/svg">
                      <g fill="#fff" fillRule="evenodd">
                        <path d="M0 46h9.5V0H0zM23 46h9.5V0H23z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      
      {/* About Section */}
      <section className="bg-light py-5">
        <Container className="px-5">
          <Row className="gx-5 justify-content-center">
            <Col className="col-xxl-8">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">My name is Start Bootstrap and I help brands grow.</p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                  <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                  <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
