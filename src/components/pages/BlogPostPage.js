import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import blogs from "../../blogs";

export const BlogPostPage = () => {
  const { id } = useParams();
  const blogId = Number(id);
  const blog = blogs.find((blog) => blog.id === blogId);

  return (
    <>
      {blog && (
        <motion.div
          className="p-4  rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={blog.banner}
            alt={blog.title}
          />
          <h2 className="text-3xl font-bold text-white mt-4 mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-500 mb-2">
            Written by {blog.author} on {blog.date} · {blog.readingTime} read
          </p>
          <SyntaxHighlighter language="javascript" style={dark}>
            {blog.content}
          </SyntaxHighlighter>
        </motion.div>
      )}
    </>
  );
};
