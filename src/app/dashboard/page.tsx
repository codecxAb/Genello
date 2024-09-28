// src/app/page.tsx
import React from "react";
import Navbar from "../components/navbar";
import PostForm from "./PostForm";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="send-post flex justify-center items-center flex-col gap-5 h-96 w-full">
        <h1 className="text-7xl font-bold text-blue-500 ">Create a Post</h1>
        <PostForm />
      </div>
    </div>
  );
};

export default HomePage;
