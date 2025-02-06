import React from 'react'

const Error = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{Error.statusText || Error.message}</i>
      </p>
    </div>
  )
}

export default Error

