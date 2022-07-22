import React from 'react'
import './Dice.css'

const Dice = (props) => {
  return (<>
    <div className='dice'>{props.num}</div>
  </>)
}

export default Dice