import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  width: "100px",
   padding: "12px",
   margin: "0 6px 6px",
   background: "red",
   textDecoration: "none",
   color: "white",
}

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black"
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black"
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black"
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black"
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
