import React from "react";
import { Route, Routes } from "react-router-dom";

import PostList from "./PostList";
import PostDetails from "./PostDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/new" element={<h1>New Post</h1>} />
      <Route path="/:id" element={<PostDetails />} />
    </Routes>
  );
}

export default AppRoutes;