import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SideNav = props => {
  const { navLinks } = props;

  return (
    <div>
      <Router>
        {navLinks.map((items, key) => {
          return (
            <li key={key}>
              <Link to={items.link}>
                {items.link}
                {items.name}
              </Link>
            </li>
          );
        })}
      </Router>
    </div>
  );
};

export default SideNav;
