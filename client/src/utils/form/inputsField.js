import React from "react";

export const inputField = ({ input, label, type, meta: { error, touched } }) => {
  
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} style={{marginBottom: 5}}/>
      <div className='red-text' style={{ marginBottom: 20 }}>{touched && error && <span>{error}</span> }</div>
    </div>
  );
};

