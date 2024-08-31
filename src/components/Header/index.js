import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";

const Header = () => {
  const { page } = useParams();

  return (
    <div className="header">
      <div className="logo">{page || "Dashboard"}</div>
    </div>
  );
};

export default Header;
