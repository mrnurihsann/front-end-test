import React from "react";
import BlogPage from "../components/BlogPage";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto mt-0 mb-2 pr-2">
      <div className="max-w-9xl mx-auto p-2">
        <Banner />
        <BlogPage />
      </div>
    </div>
  );
};

export default Home;
