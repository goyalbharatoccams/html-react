import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-auto">
      <Container className="px-5">
        <Row className="align-items-center justify-content-between flex-column flex-sm-row">
          <Col className="col-auto">
            <div className="small m-0">Copyright &copy; Your Website {new Date().getFullYear()}</div>
          </Col>
          <Col className="col-auto">
            <a className="small" href="#!">Privacy</a>
            <span className="mx-1">&middot;</span>
            <a className="small" href="#!">Terms</a>
            <span className="mx-1">&middot;</span>
            <a className="small" href="#!">Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
