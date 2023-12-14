import React from "react";
import Navbar from "./Navbar/Navbar";

const Layoutes = ({ children }) => {
  return (
    <div>
      {" "}
      <Navbar /> {children}
    </div>
  );
};

export default Layoutes;
