import React from 'react'
import Props from './Props'

const FirstComponent = (props) => {
const data = {titulo: 'First', subtitulo: 'Component'}

  return (
    <div>
        <p>Este é meu primeiro componente</p>
        <Props data={data}/>
    </div>
    
  )
}

export default FirstComponent