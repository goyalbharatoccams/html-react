import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      // In a real app, you would send the form data to a server here
      setSubmitted(true);
    }
    
    setValidated(true);
  };
  
  return (
    <main className="flex-shrink-0">
      <section className="py-5">
        <Container className="px-5">
          {/* Contact form */}
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <i className="bi bi-envelope"></i>
              </div>
              <h1 className="fw-bolder">Get in touch</h1>
              <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
            </div>
            <Row className="gx-5 justify-content-center">
              <Col lg={8} xl={6}>
                {submitted ? (
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <p>We'll be in touch soon!</p>
                  </div>
                ) : (
                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {/* Name input */}
                    <Form.Group className="form-floating mb-3">
                      <Form.Control
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <Form.Label htmlFor="name">Full name</Form.Label>
                      <Form.Control.Feedback type="invalid">A name is required.</Form.Control.Feedback>
                    </Form.Group>
                    
                    {/* Email input */}
                    <Form.Group className="form-floating mb-3">
                      <Form.Control
                        id="email"
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <Form.Label htmlFor="email">Email address</Form.Label>
                      <Form.Control.Feedback type="invalid">An email is required.</Form.Control.Feedback>
                    </Form.Group>
                    
                    {/* Phone input */}
                    <Form.Group className="form-floating mb-3">
                      <Form.Control
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <Form.Label htmlFor="phone">Phone number</Form.Label>
                      <Form.Control.Feedback type="invalid">A phone number is required.</Form.Control.Feedback>
                    </Form.Group>
                    
                    {/* Message input */}
                    <Form.Group className="form-floating mb-3">
                      <Form.Control
                        id="message"
                        as="textarea"
                        name="message"
                        placeholder="Enter your message here..."
                        style={{ height: '10rem' }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <Form.Label htmlFor="message">Message</Form.Label>
                      <Form.Control.Feedback type="invalid">A message is required.</Form.Control.Feedback>
                    </Form.Group>
                    
                    {/* Submit Button */}
                    <div className="d-grid">
                      <Button variant="primary" size="lg" type="submit">Submit</Button>
                    </div>
                  </Form>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
