import logo from './logo.svg';
import './App.css';
import { Card, Button,Navbar,Container } from 'react-bootstrap';

function App() {
  return (
    <body>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://brandlogos.net/wp-content/uploads/2020/09/react-logo-512x512.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      what the heck
      </Navbar.Brand>
    </Container>
  </Navbar>
  </body>
      );
}

      export default App;
