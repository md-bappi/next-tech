import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoReorderThreeOutline, IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoIosGift } from "react-icons/io";
import { MdOutlineFlashOn, MdPeopleAlt } from "react-icons/md";

const navLinks = [
  {
    id: 1,
    title: "desktop",
    subMenu: [
      { id: "1-1", title: "desktop offer" },
      {
        id: "1-2",
        title: "star pc",
        submenu: [
          { id: "1-21", title: "Intel pc" },
          { id: "1-22", title: "Ryzen pc" },
        ],
      },
      {
        id: "1-3",
        title: "gaming pc",
        submenu: [
          { id: "1-31", title: "Intel pc" },
          { id: "1-32", title: "Ryzen pc" },
        ],
      },
      { id: "1-4", title: "brand pc" },
      { id: "1-5", title: "all-in-one pc" },
      { id: "1-6", title: "portable mini pc" },
      { id: "1-7", title: "apple mac mini" },
      { id: "1-8", title: "apple mac" },
      { id: "1-9", title: "apple mac studio" },
      { id: "1-10", title: "apple mac pro" },
      { id: "1-11", title: "show all desktop" },
    ],
  },
  { id: 2, title: "laptop" },
  { id: 3, title: "Component" },
  { id: 4, title: "Monitor" },
  { id: 5, title: "ups" },
  { id: 6, title: "phone" },
  { id: 7, title: "tablet" },
  { id: 8, title: "office equipment" },
  { id: 9, title: "camera" },
  { id: 10, title: "security" },
  { id: 11, title: "networking" },
  { id: 12, title: "software" },
  { id: 13, title: "server & storage" },
  { id: 14, title: "accessories" },
  { id: 15, title: "gadget" },
  { id: 16, title: "gaming" },
  { id: 17, title: "tv" },
  { id: 18, title: "appliance" },
];

const navLink = [
  {
    id: 1,
    title: "Offers",
    des: "latest offers",
    icon: <IoIosGift />,
    link: "/",
  },
  {
    id: 2,
    title: "happy hour",
    des: "special Deals",
    icon: <MdOutlineFlashOn />,
    link: "/",
  },
  {
    id: 3,
    title: "Account",
    des: "Register or login",
    icon: <MdPeopleAlt />,
    link: "/login",
  },
];

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="flex justify-between items-center h-12 px-2 lg:px-0 lg:w-4/5 mx-auto lg:gap-6">
          <span
            onClick={() => setShowSidebar(!showSidebar)}
            className="md:hidden"
          >
            <IoReorderThreeOutline size={22} />
          </span>

          <Link
            to="/"
            className="text-orange-400 font-semibold text-lg capitalize"
          >
            next<span className="text-blue-400">tech</span>
          </Link>

          {/* Search */}
          <form className="hidden md:flex bg-white text-black rounded-lg px-2 items-center gap-2 py-1 min-w-64">
            <input
              type="text"
              className="outline-none border-none text-sm tracking-tight w-full"
              placeholder="Search..."
            />
            <CiSearch size={18} />
          </form>

          {/* Offers */}
          <div className="hidden lg:flex items-center gap-4">
            {navLink.map((item) => (
              <Link
                to={item.link}
                key={item.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="text-orange-500">{item.icon}</span>
                <div>
                  <h4 className="text-xs capitalize">{item.title}</h4>
                  <p className="text-[10px] text-gray-300 capitalize">
                    {item.des}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="hidden lg:block text-xs font-semibold bg-gradient-to-r from-blue-800 to-blue-500 px-3 py-2 rounded-sm text-white"
          >
            PC Builder
          </Link>

          <div className="flex items-center gap-2 lg:hidden">
            <CiSearch size={22} />
            <IoCartOutline size={22} />
          </div>
        </div>
      </nav>

      {/* Navlinks */}
      <ul className="hidden lg:flex justify-between items-start gap-2 w-4/5 mx-auto">
        {navLinks.map((item) => (
          <li
            key={item.id}
            className="relative group"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <NavLink className="text-xs capitalize">{item.title}</NavLink>

            {item.subMenu && hoveredItem === item.id && (
              <ul className="absolute top-full left-0 bg-white shadow-lg shadow-gray-300 rounded-sm w-52 z-50">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.id} className="relative group/submenu">
                    <Link
                      to="/"
                      className="block px-3 py-2 text-xs capitalize hover:bg-gray-100"
                    >
                      {subItem.title}
                    </Link>
                    {subItem.submenu && (
                      <ul className="absolute top-0 left-full bg-white shadow-lg rounded-sm w-52 hidden group-hover/submenu:block">
                        {subItem.submenu.map((subSubItem) => (
                          <li key={subSubItem.id}>
                            <Link
                              to="/"
                              className="block px-3 py-2 text-xs capitalize hover:bg-gray-100"
                            >
                              {subSubItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
