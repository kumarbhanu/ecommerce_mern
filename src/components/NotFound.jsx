import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Oops!</h4>
        <p className="mb-0">
          Sorry, the page you are looking for at <strong>{location.pathname}</strong> could not be found.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
