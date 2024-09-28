// src/app/components/PostForm.tsx
"use client";
import React, { useState } from "react";

const PostForm = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!content) {
      setError("Content is required");
      return;
    }

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong");
      }

      const post = await response.json();
      setSuccess("Post created successfully!");
      setContent(""); // Clear the input field
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form className="flex flex-col itmes-center gap-5" onSubmit={handleSubmit}>
      <textarea
        className="rounded-xl bg-zinc-700 p-4 w-96 h-52"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        required
      />
      <button
        className="px-4 rounded-xl py-2 bg-green-500 text-xl font-bold text-white hover:bg-green-600 mx-32"
        type="submit"
      >
        Post
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default PostForm;
