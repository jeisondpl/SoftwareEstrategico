import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Alerta } from '../../components'
import { Link } from 'react-router-dom'
import { Header } from '../../components'

const Error404 = () => {
  return (
    <>
      <Header onHideBtn={false} />
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} className='pt-5'>
            <Alerta text={'404 oops! no encontramos esta pagina '} variant={'warning'} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Error404
