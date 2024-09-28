"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const navbar = () => {
  const { data: session } = useSession();
  const username = session?.user?.email
    ? session.user.email.slice(0, 4)
    : "user";
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <h1>GENELLO</h1>
      <div className="nav-search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <div className="userinfo flex items-center gap-2 ">
        <h1>{username}</h1>
        <img
          className="h-10 w-auto rounded-full"
          src="https://picsum.photos/200"
          alt=""
        />
      </div>
    </div>
  );
};

export default navbar;
