import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Resume = () => {
  return (
    <main className="flex-shrink-0">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Resume</span>
          </h1>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-11 col-xl-9 col-xxl-8">
            {/* Experience Section */}
            <section>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                {/* Download resume button */}
                <Button variant="primary" className="px-4 py-3" href="#!">
                  <div className="d-inline-block bi bi-download me-2"></div>
                  Download Resume
                </Button>
              </div>
              
              {/* Experience Card 1 */}
              <Card className="shadow border-0 rounded-4 mb-5">
                <Card.Body className="p-5">
                  <Row className="align-items-center gx-5">
                    <Col className="text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2019 - Present</div>
                        <div className="small fw-bolder">Web Developer</div>
                        <div className="small text-muted">Stark Industries</div>
                        <div className="small text-muted">Los Angeles, CA</div>
                      </div>
                    </Col>
                    <Col className="col-lg-8">
                      <div>
                        <div className="fw-bolder">Senior Web Developer</div>
                        <div className="text-muted">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              
              {/* Experience Card 2 */}
              <Card className="shadow border-0 rounded-4 mb-5">
                <Card.Body className="p-5">
                  <Row className="align-items-center gx-5">
                    <Col className="text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2017 - 2019</div>
                        <div className="small fw-bolder">SEM Specialist</div>
                        <div className="small text-muted">Wayne Enterprises</div>
                        <div className="small text-muted">Gotham City, NY</div>
                      </div>
                    </Col>
                    <Col className="col-lg-8">
                      <div>
                        <div className="fw-bolder">Web Marketing Specialist</div>
                        <div className="text-muted">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </section>
            
            {/* Education Section */}
            <section>
              <h2 className="text-primary fw-bolder mb-4">Education</h2>
              
              {/* Education Card 1 */}
              <Card className="shadow border-0 rounded-4 mb-5">
                <Card.Body className="p-5">
                  <Row className="align-items-center gx-5">
                    <Col className="text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2015 - 2017</div>
                        <div className="small fw-bolder">Computer Science</div>
                        <div className="small text-muted">Gotham University</div>
                        <div className="small text-muted">Gotham City, NY</div>
                      </div>
                    </Col>
                    <Col className="col-lg-8">
                      <div>
                        <div className="fw-bolder">Master's in Computer Science</div>
                        <div className="text-muted">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              
              {/* Education Card 2 */}
              <Card className="shadow border-0 rounded-4 mb-5">
                <Card.Body className="p-5">
                  <Row className="align-items-center gx-5">
                    <Col className="text-center text-lg-start mb-4 mb-lg-0">
                      <div className="bg-light p-4 rounded-4">
                        <div className="text-primary fw-bolder mb-2">2011 - 2015</div>
                        <div className="small fw-bolder">Computer Science</div>
                        <div className="small text-muted">Metropolis University</div>
                        <div className="small text-muted">Metropolis, NY</div>
                      </div>
                    </Col>
                    <Col className="col-lg-8">
                      <div>
                        <div className="fw-bolder">Bachelor of Science in Computer Science</div>
                        <div className="text-muted">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </section>
            
            {/* Divider */}
            <div className="pb-5"></div>
            
            {/* Skills Section */}
            <section>
              <div className="card shadow border-0 rounded-4 mb-5">
                <div className="card-body p-5">
                  <div className="mb-5">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-tools"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">Professional Skills</span>
                      </h3>
                    </div>
                    <Row className="row-cols-1 row-cols-md-3 mb-4">
                      <Col className="mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">SEO/SEM Marketing</div>
                      </Col>
                      <Col className="mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Statistical Analysis</div>
                      </Col>
                      <Col>
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div>
                      </Col>
                    </Row>
                    <Row className="row-cols-1 row-cols-md-3">
                      <Col className="mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Network Security</div>
                      </Col>
                      <Col className="mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Adobe Software Suite</div>
                      </Col>
                      <Col>
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">User Interface Design</div>
                      </Col>
                    </Row>
                  </div>
                  <div className="mb-0">
                    <div className="d-flex align-items-center mb-4">
                      <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                        <i className="bi bi-code-slash"></i>
                      </div>
                      <h3 className="fw-bolder mb-0">
                        <span className="text-gradient d-inline">Languages</span>
                      </h3>
                    </div>
                    <Row className="row-cols-1 row-cols-md-3 mb-4">
                      <Col className="mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div>
                      </Col>
                      <Col className="mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div>
                      </Col>
                      <Col>
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div>
                      </Col>
                    </Row>
                    <Row className="row-cols-1 row-cols-md-3">
                      <Col className="mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div>
                      </Col>
                      <Col className="mb-4 mb-md-0">
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Ruby</div>
                      </Col>
                      <Col>
                        <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
