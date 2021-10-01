import React from 'react'
import { Tabla, Header } from '../../components'
import { connect } from 'react-redux'
import { getUsers, resetUsers } from '../../redux/userDuck'
import { COLORES } from '../../services'

class Home extends React.Component {
  
  state = {
    contador: 0,
    colorTitle: COLORES,
  }

  getDataUsers = () => {
    this.props.getUsers()
  }

  setColor = () => {
    const { contador, colorTitle } = this.state
    if (contador <= colorTitle.length - 2) {
      this.setState({
        contador: contador + 1,
      })
    } else {
      this.setState({
        contador: 0,
      })
    }
  }

  render() {
    const { resetUsers, getUsers, data, fetching, error } = this.props
    return (
      <>
        <Header resetUsers={resetUsers} getUsers={getUsers} setColor={this.setColor} isDate={data.length != 0 && true} />
        <Tabla data={data} fetching={fetching} error={error} setColorTitle={this.state.colorTitle[this.state.contador]} />
      </>
    )
  }
}

const mapState = ({ user }) => {
  return {
    data: user.data,
    fetching: user.fetching,
    error: user.error,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    resetUsers: () => dispatch(resetUsers()),
  }
}
export default connect(mapState, mapDispatch)(Home)
