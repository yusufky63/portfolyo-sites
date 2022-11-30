import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className=" flex  justify-center  my-5">
      <nav className=" container max-w-3xl  ">
        <div className="font-bold text-gray-200 flex md:justify-start justify-center items-center  p-2 ">
          <div className=" hover:text-gray-400 hover:underline underline-offset-8">
            {" "}
            <NavLink  style={({ isActive }) => ({ color: isActive ? "white" : "gray" })}
             to="/">{"<"} AnaSayfa {"/>"}</NavLink>
          </div>
          <div className="mx-10 hover:text-gray-400 hover:underline underline-offset-8">
            {" "}
            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "gray" })} to="/projects">{"<"} Projeler {"/>"}</NavLink>
          </div>
          {/* <div className=" hover:text-gray-400 hover:underline underline-offset-8">
            {" "}
            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "gray" })} to="/blog">Blog</NavLink>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Header;
