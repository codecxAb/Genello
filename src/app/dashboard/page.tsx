import React from "react";

import Navbar from "../components/navbar";

const dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <form action="">
        <input className="h-24 w-1/4 m-4 bg-zinc-700 p-5 rounded" type="text" />
        <button
          className="px-5 py-3 bg-green-500 text-white font-bold text-xl rounded-xl"
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default dashboard;
