import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import GithubIcon from "../../assets/GithubIcon";
import OtherLinkIcon from "../../assets/OtherLinkIcon";

import { mainprojects } from "../../projectsdata";

function HomeProjects() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="my-10"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="my-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="flex justify-between items-center"
        >
          <h1 className="text-2xl font-bold my-5">
            <span className="text-gray-500"># </span>Projeler
          </h1>
          <NavLink
            to="/projects"
            className="font-bold text-sm hover:underline underline-offset-8 text-gray-400"
          >
            Daha Fazlası için <span> {"->"} </span>{" "}
          </NavLink>
        </motion.div>

        <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2  ">
          {mainprojects.map((item) => {
            return (
              <div className=" p-3 card" key={item.id}>
                <div className="my-2 p-1">
                  <h2 className="text-lg font-bold hover:translate-x-3 transition-all ">
                    <span className="text-gray-500 shadow-2xl">{"| "}</span>
                    {item.title.length > 30
                      ? item.title.slice(0, 30) + "..."
                      : item.title}
                  </h2>
                </div>
                <p className="text-sm break-words text-gray-400">
                  {item.desc.length > 50
                    ? item.desc.slice(0, 120) + "..."
                    : item.desc}
                </p>
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
                      href={item.live}
                      target="_blank"
                      rel="noreferrer"
                      className="border hover:text-green-500 border-gray-600 rounded-lg p-2 mx-2"
                    >
                      <OtherLinkIcon />
                    </a>
                  </div>
                  <div>
                    <h3 className="text-gray-500 text-xs">{item.tech}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HomeProjects;
