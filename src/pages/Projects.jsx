import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  return (
    <main className="flex-shrink-0">
      <section className="py-5">
        <Container className="px-5 mb-5">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <Row className="gx-5 justify-content-center">
            <Col lg={11} xl={9} xxl={8}>
              {/* Project Card 1 */}
              <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
                <Card.Body className="p-0">
                  <Row className="align-items-center gx-0">
                    <Col lg={6} className="d-flex align-items-center" style={{ minHeight: '500px', backgroundImage: 'url(https://dummyimage.com/600x400/343a40/6c757d)', backgroundSize: 'cover' }}>
                      <div className="p-4 p-md-5">
                        <div className="badge bg-gradient-primary-to-secondary text-white mb-2">Website</div>
                        <div className="h5 fw-bolder text-white">Project Name 1</div>
                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="p-4 p-md-5">
                        <div className="mb-5">
                          <div className="small text-uppercase fw-bolder">Client</div>
                          <div className="small text-gray-600">Client Name</div>
                        </div>
                        <div className="mb-5">
                          <div className="small text-uppercase fw-bolder">Date</div>
                          <div className="small text-gray-600">January 2023</div>
                        </div>
                        <div className="mb-0">
                          <div className="small text-uppercase fw-bolder">URL</div>
                          <a href="#!">project-name.com</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              
              {/* Project Card 2 */}
              <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
                <Card.Body className="p-0">
                  <Row className="align-items-center gx-0">
                    <Col lg={6} className="d-flex align-items-center order-lg-2" style={{ minHeight: '500px', backgroundImage: 'url(https://dummyimage.com/600x400/343a40/6c757d)', backgroundSize: 'cover' }}>
                      <div className="p-4 p-md-5">
                        <div className="badge bg-gradient-primary-to-secondary text-white mb-2">Mobile App</div>
                        <div className="h5 fw-bolder text-white">Project Name 2</div>
                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                      </div>
                    </Col>
                    <Col lg={6} className="order-lg-1">
                      <div className="p-4 p-md-5">
                        <div className="mb-5">
                          <div className="small text-uppercase fw-bolder">Client</div>
                          <div className="small text-gray-600">Client Name</div>
                        </div>
                        <div className="mb-5">
                          <div className="small text-uppercase fw-bolder">Date</div>
                          <div className="small text-gray-600">March 2023</div>
                        </div>
                        <div className="mb-0">
                          <div className="small text-uppercase fw-bolder">URL</div>
                          <a href="#!">project-name.com</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              
              {/* Project Card 3 */}
              <Card className="overflow-hidden shadow rounded-4 border-0 mb-5">
                <Card.Body className="p-0">
                  <Row className="align-items-center gx-0">
                    <Col lg={6} className="d-flex align-items-center" style={{ minHeight: '500px', backgroundImage: 'url(https://dummyimage.com/600x400/343a40/6c757d)', backgroundSize: 'cover' }}>
                      <div className="p-4 p-md-5">
                        <div className="badge bg-gradient-primary-to-secondary text-white mb-2">Web App</div>
                        <div className="h5 fw-bolder text-white">Project Name 3</div>
                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!</p>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="p-4 p-md-5">
                        <div className="mb-5">
                          <div className="small text-uppercase fw-bolder">Client</div>
                          <div className="small text-gray-600">Client Name</div>
                        </div>
                        <div className="mb-5">
                          <div className="small text-uppercase fw-bolder">Date</div>
                          <div className="small text-gray-600">May 2023</div>
                        </div>
                        <div className="mb-0">
                          <div className="small text-uppercase fw-bolder">URL</div>
                          <a href="#!">project-name.com</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* Call to action section */}
      <section className="py-5 bg-gradient-primary-to-secondary text-white">
        <Container className="px-5 my-5">
          <div className="text-center">
            <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
            <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Projects;
