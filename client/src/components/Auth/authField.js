import React from "react";

const authField = ({ input, label, type, meta: { error, touched } }) => {
  console.log();
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} style={{marginBottom: 5}}/>
      <div className='red-text' style={{ marginBottom: 20 }}>{touched && error && <span>{error}</span> }</div>
    </div>
  );
};

export default authField;
