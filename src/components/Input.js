import React, { Component } from "react";
export const Input = (props) => {
  return (
    <div className="form-group">
      <label for={props.label}>Email address</label>
      <input
        type={props.type}
        class="form-control"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};
