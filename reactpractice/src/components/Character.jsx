import React from 'react'

function Character(props) {
  // const characterHeading = screen.getByRole('heading', { level: 2 });
  return (
    <div>
      <h2>
        {props.name}
        {props.race}
        {props.realm}
        
      </h2>
      
    </div>
  )
}

export default Character