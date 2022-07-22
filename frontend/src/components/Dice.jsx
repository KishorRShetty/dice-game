import React from 'react'
import './Dice.css'

const Dice = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? 'tomato' : 'white',
  }
  return (<>
    <div onClick={props.holdDice} style={styles} className='dice'>{props.num}</div>
  </>)
}

export default Dice