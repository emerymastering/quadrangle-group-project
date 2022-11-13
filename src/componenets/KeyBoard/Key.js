import React from "react";

export default function Key(props) {
  if (props.big) {
    <button
      onClick={() => handleClickForBig()}
      style={{
        width: 65.4,
        height: 58,
        margin: 3,
        borderRadius: 3,
        display: "grid",
        placeItems: "center",
        fontSize: 15,
        backgroundColor: "#d3d6da",
        color: "black",
        fontFamily: "Arial",
        cursor: "pointer",
        border: 0,
        fontWeight: "bold",
      }}
    >
      {props.letter}
    </button>;
  }
  return <div>Key</div>;
}
