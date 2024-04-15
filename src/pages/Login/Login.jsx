import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Login = ({login}) => {
  const [username, setUsername] = useState("");

  const handleData = (e) => {
    setUsername(e.target.value);
  };
  

  const getUser = async () => {
    const URL = `https://api.github.com/users/${username}`
// console.log(URL)
    try{
      const res = await axios(URL)
      const {data} = res 
      login(data)
    }catch(err){
      alert("Kullanıcı bulunamadı");
      console.log(err.message)
    }
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    getUser()
  }

  return (
    <Navbar className="flex-column justify-content-end">
      <Container fluid className="py-3 bg-body-tertiary px-5">
        <p className="fs-3 text-bg-secondary rounded-3 px-2 d-inline-block align-top">
          DevLink
        </p>
      </Container>
      <Form className="mt-5 w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={handleData}
            value={username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Button className="float-end" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Navbar>
  );
};

export default Login;
