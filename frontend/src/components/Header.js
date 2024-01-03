import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

const Header = ({title}) => {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
    </Navbar>
  );
}
export default Header;