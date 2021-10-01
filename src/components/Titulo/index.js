import React from 'react'

const stylesTitle = {
  backgroundColor: '#1F618D1A',
  padding: 15,
  borderRadius: 10,
}

const index = ({ setColorTitle, texto }) => {
  const _styles = {
    ...stylesTitle,
    ...{ backgroundColor: setColorTitle },
  }
  return <h1 style={_styles}>{texto}</h1>
}

export default index
