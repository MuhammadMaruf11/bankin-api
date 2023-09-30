import React from 'react'

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  textAlign: "center",
  flexDirection: "column",
};

const Error = () => {
  return (
    <>
      <div style={containerStyle}>
        <h1>404 Error!</h1>
        <h2>Page Not Found.</h2>
      </div>
    </>
  );
}

export default Error