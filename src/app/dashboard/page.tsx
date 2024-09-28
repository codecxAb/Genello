// src/app/page.tsx
import React from 'react';
import PostForm from './PostForm';

const HomePage = () => {
  return (
    <div>
      <h1>Create a Post</h1>
      <PostForm />
    </div>
  );
};

export default HomePage;