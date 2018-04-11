import React from "react";

const searchBar = props => {
  return (
    <div className="input-field col s6">
      <input
        type="text"
        placeholder="Search.."
        onChange={props.onChange}
        value={props.value}
      />
      <a className="waves-effect waves-light btn" onClick={props.onClick}>
        Search
      </a>
    </div>
  );
};

export default searchBar;
