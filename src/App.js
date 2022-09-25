import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import Users from "./Users";

function App() {
  const [tulisan, setTulisan] = useState();
  return (
    <div className="App">
      <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Users /> */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facilis quis nostrum quibusdam quisquam impedit laboriosam laborum odio doloribus, alias mollitia totam sed! Consectetur perspiciatis, officia sit adipisci eius at.
      </p>
      <h1>nama saya yahya wkwkwkw</h1>
      <input type="text" placeholder="masukan nama" onChange={(text) => setTulisan(text.target.value)} />
      <h3>{tulisan}</h3> */}
    </div>
  );
}

export default App;
