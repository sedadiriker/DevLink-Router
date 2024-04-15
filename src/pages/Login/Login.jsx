import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useState } from "react";

const Login = ({login}) => {
  const [email, setEmail] = useState("");

  const handleData = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    login(email)
  }
  return (
    <Navbar className="flex-column justify-content-end">
      <Container fluid className="py-3 bg-body-tertiary px-5">
        <p className="fs-3 text-bg-secondary rounded-3 px-2 d-inline-block align-top">
          DevLink
        </p>
      </Container>
      <Form className="mt-5 w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleData}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="float-end" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Navbar>
  );
};

export default Login;
