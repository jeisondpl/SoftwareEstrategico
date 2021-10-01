import React, { Component } from 'react'
import { Container, Table, Row, Col } from 'react-bootstrap'
import { Alerta, Titulo } from '../../components'
class Tabla extends React.Component {
  state = {
    valor: 3,
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
            {this.props.error && <Alerta text={'Oops! Error al consultar la Api'} variant={'danger'}></Alerta>}
            {this.props.fetching && <p>Buscando datos...</p>}
            {this.props.data.length != 0 ? (
              <>
                <Titulo texto={'Listado de usuarios'} setColorTitle={this.props.setColorTitle} />
                <Table striped bordered hover className='mt-5'>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>gender</th>
                      <th>email</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            ) : (
              <Alerta text={'Oops sin datos!, presionar Button:[Get User] para consultar la Api'} variant={'info'}></Alerta>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Tabla
