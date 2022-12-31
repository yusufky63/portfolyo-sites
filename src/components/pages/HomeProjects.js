import React from 'react'
import { NavLink } from "react-router-dom";
function HomeProjects() {
  return (
    <div className=" my-10">
    <div className="flex justify-between items-center">
      {" "}
      <h1 className="text-2xl font-bold my-5">
        <span className="text-gray-500"># </span>Projeler
      </h1>
      <NavLink
        to="/projects"
        className="font-bold text-sm hover:underline underline-offset-8 text-gray-400"
      >
        Daha Fazlası için <span> {"->"} </span>{" "}
      </NavLink>
    </div>

    <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2  ">
      <div className="border border-gray-700 rounded-lg p-3">
        <div className="my-2 p-1">
          {" "}
          <h2 className="text-lg font-bold"> {"| "}Kripto Sitesi</h2>
        </div>

        <p className="text-sm text-gray-400">
          Coin fiyatları, Kripto Haberleri ve Demo Al-Sat işlemlerinin
          gerçekleştirebileceğiniz mini site.
        </p>
        <div className=" flex justify-between items-end  pt-5  ">
          <div className="flex">
            {" "}
            <a
              rel="noreferrer"
              className="border hover:text-red-500 border-gray-600 rounded-lg p-2 mx-2"
              target={"_blank"}
              href="https://github.com/yusufky63/crypto-app"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href="https://cryptoxchain.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="border hover:text-green-500 border-gray-600 rounded-lg p-2 mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div>
            {" "}
            <h3 className="text-gray-500 text-xs">ReactJS, Tailwind, Firebase</h3>
          </div>
        </div>
      </div>
      <div className="border border-gray-700 rounded-lg p-3">
        <div className="my-2 p-1">
          {" "}
          <h2 className="text-lg font-bold"> {"| "}Not Uygulaması</h2>
        </div>

        <p className="text-sm text-gray-400">
         Firebase bağlı basit bir not uygulaması.Kaydolma, düzenleme, arşivleme gibi özellikleri bulunuyor.
        </p>
        <div className=" flex justify-between items-end  pt-5  ">
          <div className="flex">
            {" "}
            <a
              rel="noreferrer"
              className="border hover:text-red-500 border-gray-600 rounded-lg p-2 mx-2"
              target={"_blank"}
              href="https://github.com/yusufky63/react-note-app"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              href="https://react-notes-app-redux.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="border hover:text-green-500 border-gray-600 rounded-lg p-2 mx-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div>
            {" "}
            <h3 className="text-gray-500 text-xs">ReactJS, Tailwind, Firebase</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeProjects