import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import Swal from "sweetalert2";

const Login = ({ login }) => {
  const [username, setUsername] = useState("");

  const handleData = (e) => {
    setUsername(e.target.value);
  };

  const getUser = async () => {
    const URL = `https://api.github.com/users/${username}`;
    // console.log(URL)
    try {
      const res = await axios(URL);
      const { data } = res;
      login(data);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "User Not Found",
      });
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    getUser();
  };

  return (
    <div className="login">
      <Form
        className="py-5 w-50 m-auto d-flex flex-column justify-content-center text-white"
        onSubmit={handleSubmit}
      >
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

        <Button
          className="float-end w-50 m-auto mt-5"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
