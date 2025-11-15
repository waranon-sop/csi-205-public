import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { verifyUser } from "../../data/users";

const Login = ({ setToken, setRole }) => {
  const userRef = useRef();
  const passRef = useRef();

  const handleLogin = () => {
    const user = userRef.current.value.trim();
    const pass = passRef.current.value.trim();

    if (!user || !pass) {
      alert("Please fill in all fields");
      return;
    }

    const userFound = verifyUser(user, pass);
    if (!userFound) {
      alert(" Wrong username or password");
      userRef.current.value = "";
      passRef.current.value = "";
      userRef.current.focus();
    } else {
      alert(" Login successful!");
      setToken(userFound.token);
      setRole(userFound.role);
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center h-100"
    >
      <Row className="w-100">
        <Col xs={12} sm={10} md={8} lg={5} className="mx-auto">
          <Card className="shadow-lg border-0" style={{ borderRadius: "20px" }}>
            {/* Card Body */}
            <Card.Body className="p-5">
              <h2 className="text-center mb-4 fw-bold text-dark">Login</h2>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold text-dark">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  ref={userRef}
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    padding: "10px 15px",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-bold text-dark">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  ref={passRef}
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    padding: "10px 15px",
                  }}
                />
              </Form.Group>

              <Button
                variant="dark"
                className="w-100 fw-bold"
                style={{ borderRadius: "8px", padding: "10px" }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
