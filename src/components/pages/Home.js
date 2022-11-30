import React from "react";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="flex justify-center  ">
      <div className="container max-w-3xl  text-left p-2">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
          {" "}
          <div>
            {" "}
            <h1 className="typing-text text-2xl font-bold text-left">
              FRONT-END DEVELOPER
            </h1>
            <h2 className="text-xl text-gray-300 font-bold">Yusuf Kaya</h2>
            <p className="text-gray-400 text-sm my-5">
            Merhaba, ben Yusuf 23 yaşındayım ve Cumhuriyet Üniversitesi / YBS 4.Sınıf öğrencisiyim, Front-End Developer olmak için çalışıyorum.

            </p>
          </div>
          <div>
            <img
              draggable="false"
              className="w-36 mb-10 sm:w-60 rounded-full"
              src={require("../../img/avatar2.jpg")}
              alt=""
            />
          </div>
        </div>

        <div className="">
          <h1 className="text-2xl font-bold my-5 ">
            <span className="text-gray-500"># </span>Skills
          </h1>
          <div className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#E65100"
                  d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                ></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path
                  fill="#FFF"
                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                ></path>
                <path
                  fill="#EEE"
                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0277BD"
                  d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                ></path>
                <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path
                  fill="#FFF"
                  d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                ></path>
                <path
                  fill="#EEE"
                  d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                className="d-block my-1"
                viewBox="0 0 118 94"
                role="img"
              >
                <title>Bootstrap</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                <path
                  fill="#000001"
                  d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#80deea"
                  d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                ></path>
                <path
                  fill="#80deea"
                  d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                ></path>
                <path
                  fill="#80deea"
                  d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                ></path>
                <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#00acc1"
                  d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ff8f00"
                  d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
                ></path>
                <path
                  fill="#ffa000"
                  d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z1004"
                ></path>
                <path
                  fill="#ff6f00"
                  d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
                ></path>
                <path
                  fill="#ffc400"
                  d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
                ></path>
              </svg>
            </span>
            <span>
              <img
                alt="c#"
                width="32"
                src="https://cdn.cdnlogo.com/logos/c/27/c.svg"
              />
            </span>
          </div>
        </div>
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
                Geliştirildiği mini site.
              </p>
              <div className=" flex justify-between items-end  pt-5  ">
                <div className="flex">
                  {" "}
                  <a
                    rel="noreferrer"
                    className="border hover:text-red-500 border-gray-600 rounded-lg p-2 mx-2"
                    target={"_blank"}
                    href="https://github.com/yusufky63/test-crypto2"
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
                    href="https://test-react-crypto-app.netlify.app/"
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
      </div>
    </div>
  );
}

export default Home;
