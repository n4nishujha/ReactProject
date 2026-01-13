import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">{children}</main>
    </div>
  );
};

export default Layout;
