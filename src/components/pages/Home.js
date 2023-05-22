import React from "react";
import { motion } from "framer-motion";

import HomeProjects from "./HomeProjects";
import HtmlIcon from "../../assets/skills/HtmlIcon";
import CssIcon from "../../assets/skills/CssIcon";
import BootstrapIcon from "../../assets/skills/BootstrapIcon";
import JavascriptIcon from "../../assets/skills/JavascriptIcon";
import ReactIcon from "../../assets/skills/ReactIcon";
import TailwindIcon from "../../assets/skills/TailwindIcon";
import FirebaseIcon from "../../assets/skills/FirebaseIcon";
import CSharpIcon from "../../assets/skills/CSharpIcon";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-3xl text-left p-2">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="flex flex-col justify-center items-center sm:items-start"
          >
            <motion.h1
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="typing-text text-2xl font-bold text-left"
            >
              FRONT-END DEVELOPER
            </motion.h1>
            <motion.h2
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-xl text-gray-300 font-bold"
            >
              Yusuf Kaya
            </motion.h2>
            <motion.p
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-gray-400 text-sm my-5"
            >
              Merhaba, ben Yusuf 23 yaşında ve Cumhuriyet Üniversitesi / YBS
              4.Sınıf öğrencisiyim, Front-End Developer olmak için çalışıyorum.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <motion.img
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              draggable="false"
              className="w-36 mb-10 sm:w-60 rounded-full"
              src={require("../../img/avatar2.jpg")}
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-2xl font-bold my-5 "
          >
            <span className="text-gray-500"># </span>Skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex items-center"
            >
              <span>
                <HtmlIcon />
              </span>
              <span>
                <CssIcon />
              </span>
              <span>
                <BootstrapIcon />
              </span>
              <span>
                <JavascriptIcon />
              </span>
              <span>
                <ReactIcon />
              </span>
              <span>
                <TailwindIcon />
              </span>
              <span>
                <FirebaseIcon />
              </span>
              <span>
                <CSharpIcon />
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
        <HomeProjects />
      </div>
    </div>
  );
}

export default Home;
