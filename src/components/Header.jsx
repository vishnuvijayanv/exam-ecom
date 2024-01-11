import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-solid fa-cart-shopping"></i>
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header