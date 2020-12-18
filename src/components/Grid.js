import React from "react";

export const Container = (props) => {
  return <div className={`container ${props.className}`}>{props.children}</div>;
};

export const Row = (props) => {
  return <div className="row">{props.children}</div>;
};

export const Col = (props) => {
  return <div className={props.className}>{props.children}</div>;
};
