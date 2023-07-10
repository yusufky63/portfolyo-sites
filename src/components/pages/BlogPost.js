import { motion } from 'framer-motion';
import blogs from '../../blogs';
import { Link } from 'react-router-dom';

export const BlogPost = () => (
<div className="space-y-4">
    {blogs.map((blog) => (
      <motion.div 
        key={blog.id}
        className="p-4 bg-gray-800 rounded-lg shadow-md"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
      >
        <Link to={`/blog/${blog.id}`}>
          <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
        </Link>
        <p className="mt-2 text-gray-400">{blog.summary}</p>
        <p className="text-gray-500">Written by {blog.author} on {blog.date}</p>
      </motion.div>
    ))}
  </div>
);
