import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "./assets/GithubIcon";
import TwitterIcon from "./assets/TwitterIcon";
import EmailIcon from "./assets/EmailIcon";
import LinkedinIcon from "./assets/LinkedinIcon";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="footer flex justify-center"
    >
      <div className="bg-[#1b1b1e] max-w-3xl container rounded-lg shadow-2xl ">
        <footer>
          <div className="flex justify-between items-center ">
            <p className="text-gray-400 text-xs text-left ml-2 italic">
              "Yavaş ilerlemekten korkma! Değişmeden, aynı yerde sabit kalmaktan
              kork!"
            </p>
            <div className="flex">
              <a
                href="mailto:codexsha@gmail.com"
                className="p-1 m-2 text-gray-500 hover:text-green-500"
              >
                <EmailIcon />
              </a>
              <a
                href="https://twitter.com/codexsha"
                className="p-1 m-2 text-gray-500 hover:text-blue-500"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://github.com/yusufky63"
                className="p-1 m-2 text-gray-500 hover:text-red-500"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/yusuf-kaya-39522319a/"
                className="p-1 m-2 text-gray-500 hover:text-white"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
}

export default Footer;
