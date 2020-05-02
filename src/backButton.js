import React from 'react'

export default function backButton(props) {
  return (
    <div
      style={{
        backgroundColor: "#0b1b32",
        color: "#fff",
        fontSize: "large",
        gridArea: "sidebar",
        height: "100vh",
        overflow: "auto",
        lineHeight: "2rem",
      }}
    >
      <button onClick={() => props.history.push("/")}>Back</button>
    </div>
  );
}
