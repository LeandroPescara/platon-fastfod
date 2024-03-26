import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <nav className="containerNav">
      <Link to="/">
        <div>🍀</div>
      </Link>
      <ul className="containerNav--ul">
        <Link className="" to="category/carne">
          Carne 🥩
        </Link>
        <Link className="" to="category/arroz">
          Arroz 🍚
        </Link>
        <Link className="" to="category/ensalada">
          Ensaladas 🍀
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};
