import React from "react";

const Error = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center py-5">
      <h1 className="text-center mb-4">404 Page Not Found</h1>

      <h1>Oops!</h1>
      <p className="lead">Sorry, an unexpected error has occurred.</p>
      <i class="fa-solid fa-bug fa-3x"></i>
    </div>
  );
};

export default Error;
