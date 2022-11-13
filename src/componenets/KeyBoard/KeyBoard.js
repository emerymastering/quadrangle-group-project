import React from "react";
import Key from "./Key";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default function KeyBoard() {
  const set1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const set2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const set3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const Set1 = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 0,
        }}
      >
        {set1.map((char, index) => (
          <Key key={index} letter={char} />
        ))}
      </div>
    );
  };

  const Set2 = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 0,
        }}
      >
        {set2.map((char, index) => (
          <Key key={index} letter={char} />
        ))}
      </div>
    );
  };

  const Set3 = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <Key big={true} letter={"Enter"} />
        {set3.map((char, index) => (
          <Key key={index} letter={char} />
        ))}
        <Key key={true} letter={<ArrowLeftOutlined />} />
      </div>
    );
  };

  return (
    <div>
      <Set1 />
      <Set2 />
      <Set3 />
    </div>
  );
}
