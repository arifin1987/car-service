import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/login", name: "Login" },
  ];
  return (
    <div>
      <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
        {open ? <MdOutlineRestaurantMenu /> : <CiMenuBurger />}
      </div>
      <ul
        className={`md:flex md:static absolute  bg-orange-400 p-6 text-white ${
          open ? "top-5" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <NavLink
            className="mr-8 flex flex-col"
            to={route.path}
            key={route.id}
          >
            {route.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
