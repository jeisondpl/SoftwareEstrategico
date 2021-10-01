import React from 'react'
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import '../../styles/style.scss'

function Header({ getUsers, resetUsers, onHideBtn = true, setColor, isDate = false }) {
  const history = useHistory()
  return (
    <Container fluid>
      <Row>
        <Col xs={6} sm={12} md={12} id='sidebar-wrapper' className='p-0 color-sidebar'>
          <Navbar bg='primary' variant='dark'>
            <Container>
              <Navbar.Brand href='#home'>Prueba Tecnica Jeison Diaz</Navbar.Brand>
              <Nav>
                {onHideBtn ? (
                  <Nav.Link eventKey={2} className='mx-4' active>
                    {isDate && (
                      <Button onClick={() => setColor()} className='button'>
                        Presionar varias veces
                      </Button>
                    )}
                    <Button variant='info' onClick={() => resetUsers()} className='ms-2'>
                      Reset storage
                    </Button>
                  </Nav.Link>
                ) : (
                  <Nav.Link eventKey={2} className='mx-4' onClick={() => history.push('/')}>
                    <Button variant='secondary'>Ir Home</Button>
                  </Nav.Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
      {onHideBtn && (
        <Container>
          <Row>
            <Col xs={6} sm={12} md={12} className='mt-5'>
              <Button variant='primary' onClick={() => getUsers()} className='mx-4'>
                Get Users
              </Button>

              <hr className='line' />
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  )
}

export default Header
