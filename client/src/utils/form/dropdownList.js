import React from "react";
import DropdownList from "react-widgets/lib/DropdownList";

export const renderDropdownList = ({ input, data, valueField, textField, meta: { error, touched } }) => (
  <div>
    <DropdownList
      {...input}
      data={data}
      valueField={valueField}
      textField={textField}
      onChange={input.onChange}
      style={{ margin: "10px 0px" }}
    />
    <div className="red-text" style={{ marginBottom: 20 }}>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);
