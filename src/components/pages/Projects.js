import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../projectsdata";

import GithubIcon from "../../assets/GithubIcon";
import OtherLinkIcon from "../../assets/OtherLinkIcon";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="flex justify-center"
      >
        <div className="container max-w-3xl m-2">
          <h1 className="text-2xl font-bold my-5 text-left">
            <span className="text-gray-500"># </span>Projeler
          </h1>
          <div className=" grid gap-4 grid-cols-1  text-left mb-10">
            {projects.map((item) => {
              return (
                <div
                  className="border border-gray-700 rounded-lg p-3"
                  key={item.id}
                >
                  <div className="my-2 p-1">
                    <h2 className="text-lg font-bold hover:translate-x-3 transition-all ">
                      <span className="text-gray-500 shadow-2xl">{"| "}</span>
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                  <div className="flex justify-between items-end pt-5">
                    <div className="flex">
                      <a
                        rel="noreferrer"
                        className="border hover:text-red-500 border-gray-600 rounded-lg p-2 mx-2"
                        target={"_blank"}
                        href={item.github}
                      >
                        <GithubIcon />
                      </a>
                      <a
                        rel="noreferrer"
                        className="border hover:text-red-500 border-gray-600 rounded-lg p-2 mx-2"
                        target={"_blank"}
                        href={item.live}
                      >
                        <OtherLinkIcon />
                      </a>
                    </div>
                    <div className="flex">
                      <div className=" rounded-lg p-1 m-1 text-xs text-gray-400">
                        {item.tech}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
