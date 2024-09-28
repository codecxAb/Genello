// src/app/posts/page.tsx
"use client";

import React, { useEffect, useState } from "react";
// import Navbar from "../components/navbar";
import Navbar from "@/app/components/navbar";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/postings");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center p-5">
        <h1 className="text-4xl font-bold mb-5">All Posts</h1>
        {error && <p className="text-red-500">{error}</p>}
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border p-4 mb-4 rounded-md w-full max-w-md">
              <p className="text-gray-800">{post.content}</p>
              <p className="text-sm text-gray-500">Posted on {new Date(post.createdAt).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostsPage;
