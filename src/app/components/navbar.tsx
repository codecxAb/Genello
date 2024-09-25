import React from "react";

const navbar = () => {
  return (
    <div>
      <h1>GENELLO</h1>
      <div className="nav-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="userinfo">
        <h1>CodexAb</h1>
        <img src="https://picsum.photos/200" alt="" />
      </div>
    </div>
  );
};

export default navbar;
