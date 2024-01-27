import React from "react";
import Alert from "react-bootstrap/Alert";

function SuccessfullMessage({ message }) {
  return (
    <Alert key="success" variant="success">
      {message}
    </Alert>
  );
}

export default SuccessfullMessage;
