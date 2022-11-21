import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, // 本来は「color: color」。オブジェクトの属性名と変数名が同じ場合は省略可能
    fontSize: "3vw"
  };

  return <p style={contentStyle}>{children}</p>;
};
