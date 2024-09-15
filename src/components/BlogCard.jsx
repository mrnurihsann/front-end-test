import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faThumbsUp,
  faComment,
  faBookmark,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons"; // Import ikon yang dibutuhkan

// Data JSON berupa array objek
const blogData = [
  {
    id: 1,
    title: "Why Tech Workers Are Fleeing Germany — A Reality Check",
    description:
      "Over the past months and years I have seen a number of friends and colleagues leave Germany for good. Some of them were native Germans.",
    image: "berita1.png",
    date: "Jun 15, 08:30:04",
    author: { name: "Jerome Bell", avatar: "profile.png" }, // Tambahkan nama dan avatar penulis
  },
  {
    id: 2,
    title: "Mercedes Is Humiliating Tesla",
    description: "Musk is losing the self-driving race badly.",
    image: "berita2.png",
    date: "Jun 15, 08:30:04",
    author: { name: "Jerome Bell", avatar: "profile.png" },
  },
  {
    id: 3,
    title: "You are Using ChatGPT Wrong! — #1 Mistake 99% of Users Make",
    description:
      "Prompt Engineering “Gurus” are recommending this same prompting mistake over and over again.",
    image: "berita3.png",
    date: "Jun 15, 08:30:04",
    author: { name: "Jerome Bell", avatar: "profile.png" },
  },
  {
    id: 4,
    title: "Mercedes Is Humiliating Tesla",
    description: "Musk is losing the self-driving race badly.",
    image: "berita2.png",
    date: "Jun 15, 08:30:04",
    author: { name: "Jerome Bell", avatar: "profile.png" },
  },
  {
    id: 5,
    title: "You are Using ChatGPT Wrong! — #1 Mistake 99% of Users Make",
    description:
      "Prompt Engineering “Gurus” are recommending this same prompting mistake over and over again.",
    image: "berita3.png",
    date: "Jun 15, 08:30:04",
    author: { name: "Jerome Bell", avatar: "profile.png" },
  },
  {
    id: 6,
    title: "Why Tech Workers Are Fleeing Germany — A Reality Check",
    description:
      "Over the past months and years I have seen a number of friends and colleagues leave Germany for good. Some of them were native Germans.",
    image: "berita1.png",
    date: "Jun 15, 08:30:04",
    author: { name: "Jerome Bell", avatar: "profile.png" },
  },
];

const BlogCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {blogData.map((blog) => (
        <div
          key={blog.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs mx-auto mb-6"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center mb-2">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-gray-700 font-semibold">
                {blog.author.name}
              </span>
            </div>
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-gray-800">{blog.description}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center text-gray-600">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center text-gray-600 ml-3 gap-0">
                  <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                  <span>346</span>
                </div>
                <div className="flex items-center text-gray-600 ml-2">
                  <FontAwesomeIcon icon={faComment} className="ml-1 mr-1" />
                  <span>23</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="mr-1 text-gray-600"
                />
                <span className="text-gray-600">
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    className="text-gray-600 pl-2"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
