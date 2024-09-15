import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";
import Pagination from "./Pagination";
import Search from "./Search";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      let url = ``;

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, []);
  return (
    <div>
      <div>
        <Search />
        <CategorySelection />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <BlogCard />

        <div>
          <SideBar />
        </div>
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default BlogPage;
