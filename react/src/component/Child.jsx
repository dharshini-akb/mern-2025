import React from 'react'

const   Child = (props) => {
  return (
    <div>
    <h1>Name: {props.name}</h1>
    <h1>Phone-no: {props.phoneno}</h1>
    <h1>dept: {props.dept}</h1>
    </div>

  )
}

export default Child