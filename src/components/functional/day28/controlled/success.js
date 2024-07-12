import React from 'react'

function SuccessScreen(props) {
    const {data} =props
  return (
    <>
    <h3>Welcome {data.username}</h3>
    </>
  )
}

export default SuccessScreen