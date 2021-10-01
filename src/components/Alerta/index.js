import React from 'react'
import { Alert, Row, Col } from 'react-bootstrap'

const index = ({ text, variant }) => {
  return (
    <Row>
      <Col xs={12} sm={12} md={12}>
        <Alert variant={variant}>{text}</Alert>
      </Col>
    </Row>
  )
}

export default index
