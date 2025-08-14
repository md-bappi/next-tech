import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IoReorderThreeOutline,
  IoCartOutline,
  IoChevronForward,
  IoAdd,
  IoRemove,
} from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosGift } from "react-icons/io";
import { MdOutlineFlashOn, MdPeopleAlt } from "react-icons/md";

const navLinks = [
  {
    id: 1,
    title: "desktop",
    link: "/desktop",
    subMenu: [
      { id: "1-1", title: "desktop offer", link: "/desktop/desktop-offer" },
      {
        id: "1-2",
        title: "star pc",
        link: "/desktop/star-pc",
        subMenu: [
          { id: "1-21", title: "Intel pc", link: "/desktop/star-pc/intel-pc" },
          { id: "1-22", title: "Ryzen pc", link: "/desktop/star-pc/ryzen-pc" },
        ],
      },
      {
        id: "1-3",
        title: "gaming pc",
        link: "/desktop/gaming-pc",
        subMenu: [
          {
            id: "1-31",
            title: "Intel pc",
            link: "/desktop/gaming-pc/intel-pc",
          },
          {
            id: "1-32",
            title: "Ryzen pc",
            link: "/desktop/gaming-pc/ryzen-pc",
          },
        ],
      },
      { id: "1-4", title: "brand pc", link: "/desktop/brand-pc" },
      { id: "1-5", title: "all-in-one pc", link: "/desktop/all-in-one-pc" },
      {
        id: "1-6",
        title: "portable mini pc",
        link: "/desktop/portable-mini-pc",
      },
      { id: "1-7", title: "apple mac mini", link: "/desktop/apple-mac-mini" },
      { id: "1-8", title: "apple mac", link: "/desktop/apple-mac" },
      {
        id: "1-9",
        title: "apple mac studio",
        link: "/desktop/apple-mac-studio",
      },
      { id: "1-10", title: "apple mac pro", link: "/desktop/apple-mac-pro" },
      {
        id: "1-11",
        title: "show all desktop",
        link: "/desktop/show-all-desktop",
      },
    ],
  },
  {
    id: 2,
    title: "laptop",
    link: "/laptop",
    subMenu: [
      {
        id: "2-1",
        title: "All Laptop",
        link: "/laptop/all-laptop",
        subMenu: [
          { id: "2-11", title: "MSI", link: "/laptop/all-laptop/msi" },
          { id: "2-12", title: "HP", link: "/laptop/all-laptop/hp" },
          { id: "2-13", title: "Dell", link: "/laptop/all-laptop/dell" },
          { id: "2-14", title: "Lenovo", link: "/laptop/all-laptop/lenovo" },
          { id: "2-15", title: "Asus", link: "/laptop/all-laptop/asus" },
          { id: "2-16", title: "Acer", link: "/laptop/all-laptop/acer" },
          { id: "2-17", title: "Apple", link: "/laptop/all-laptop/apple" },
          { id: "2-18", title: "Smart", link: "/laptop/all-laptop/smart" },
          { id: "2-18", title: "MacBook", link: "/laptop/all-laptop/macbook" },
          {
            id: "2-18",
            title: "Microsoft",
            link: "/laptop/all-laptop/microsoft",
          },
          { id: "2-18", title: "Infinix", link: "/laptop/all-laptop/infinix" },
          { id: "2-18", title: "Walton", link: "/laptop/all-laptop/walton" },
          { id: "2-18", title: "Techno", link: "/laptop/all-laptop/techno" },
        ],
      },
      {
        id: "2-2",
        title: "Gaming Laptop",
        link: "/laptop/gaming-laptop",
        subMenu: [
          { id: "2-21", title: "MSI", link: "/laptop/gaming-laptop/msi" },
          { id: "2-22", title: "HP", link: "/laptop/gaming-laptop/hp" },
          { id: "2-23", title: "Dell", link: "/laptop/gaming-laptop/dell" },
          { id: "2-24", title: "Lenovo", link: "/laptop/gaming-laptop/lenovo" },
          { id: "2-25", title: "Asus", link: "/laptop/gaming-laptop/asus" },
          { id: "2-26", title: "Acer", link: "/laptop/gaming-laptop/acer" },
        ],
      },
      {
        id: "2-3",
        title: "Premium Ultrabook",
        link: "/laptop/premium-ultrabook",
        subMenu: [
          { id: "2-30", title: "Asus", link: "/laptop/premium-ultrabook/asus" },
          { id: "2-31", title: "Acer", link: "/laptop/premium-ultrabook/acer" },
          { id: "2-32", title: "HP", link: "/laptop/premium-ultrabook/hp" },
          {
            id: "2-33",
            title: "Microsoft",
            link: "/laptop/premium-ultrabook/microsoft",
          },
          { id: "2-34", title: "Dell", link: "/laptop/premium-ultrabook/dell" },
          {
            id: "2-35",
            title: "Lenovo",
            link: "/laptop/premium-ultrabook/lenovo",
          },
          { id: "2-36", title: "MSI", link: "/laptop/premium-ultrabook/msi" },
        ],
      },
      {
        id: "2-4",
        title: "Laptop Bag",
        link: "/laptop/laptop-bag",
        subMenu: [
          { id: "2-40", title: "Asus", link: "/laptop/laptop-bag/asus" },
          { id: "2-41", title: "Dell", link: "/laptop/laptop-bag/dell" },
          { id: "2-42", title: "Fantech", link: "/laptop/laptop-bag/fantech" },
          { id: "2-43", title: "Lenovo", link: "/laptop/laptop-bag/lenovo" },
          {
            id: "2-44",
            title: "MaxGreen",
            link: "/laptop/laptop-bag/maxgreen",
          },
          { id: "2-45", title: "Targus", link: "/laptop/laptop-bag/targus" },
          { id: "2-46", title: "Tucano", link: "/laptop/laptop-bag/tucano" },
          {
            id: "2-47",
            title: "Arctic Hunter",
            link: "/laptop/laptop-bag/archit-hunter",
          },
          { id: "2-48", title: "Honor", link: "/laptop/laptop-bag/honor" },
        ],
      },
      {
        id: "2-5",
        title: "Laptop Accessories",
        link: "/laptop/laptop-accessories",
        subMenu: [
          {
            id: "2-50",
            title: "Laptop Cooler",
            link: "/laptop/accessories/cooler",
          },
          {
            id: "2-51",
            title: "Laptop Desk",
            link: "/laptop/accessories/desk",
          },
          {
            id: "2-52",
            title: "Laptop Stand",
            link: "/laptop/accessories/stand",
          },
          {
            id: "2-53",
            title: "Laptop Battery",
            link: "/laptop/accessories/battery",
          },
          {
            id: "2-54",
            title: "Laptop Charger / Adapter",
            link: "/laptop/accessories/charger",
          },
          { id: "2-55", title: "Display", link: "/laptop/accessories/display" },
          {
            id: "2-56",
            title: "Laptop Keyboard",
            link: "/laptop/accessories/keyboard",
          },
          { id: "2-57", title: "Caddy", link: "/laptop/accessories/caddy" },
        ],
      },
      { id: "2-6", title: "Show All Laptop", link: "/laptop/show-all-laptop" },
    ],
  },
  { id: 3, title: "Component", link: "/component" },
  { id: 4, title: "Monitor", link: "/monitor" },
  { id: 5, title: "ups", link: "/ups" },
  { id: 6, title: "phone", link: "/phone" },
  { id: 7, title: "tablet", link: "/tablet" },
  { id: 8, title: "office equipment", link: "/office-equipment" },
  { id: 9, title: "camera", link: "/camera" },
  { id: 10, title: "security", link: "/security" },
  { id: 11, title: "networking", link: "/networking" },
  { id: 12, title: "software", link: "/software" },
  { id: 13, title: "server & storage", link: "/server-storage" },
  { id: 14, title: "accessories", link: "/accessories" },
  { id: 15, title: "gadget", link: "/gadget" },
  { id: 16, title: "gaming", link: "/gaming" },
  { id: 17, title: "tv", link: "/tv" },
  { id: 18, title: "appliance", link: "/appliance" },
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
  const [expandedMobileItems, setExpandedMobileItems] = useState(new Set());

  // Handle body scroll lock when sidebar is open
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSidebar]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  const toggleMobileItem = (itemId) => {
    setExpandedMobileItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <>
      <nav className="bg-gray-800 text-white">
        <div className="flex justify-between items-center h-12 px-2 lg:px-0 lg:w-4/5 mx-auto lg:gap-6">
          <span
            onClick={() => setShowSidebar(!showSidebar)}
            className="md:hidden cursor-pointer"
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
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex bg-white text-black rounded-lg px-2 items-center gap-2 py-1 min-w-64"
          >
            <input
              type="text"
              className="outline-none border-none text-sm tracking-tight w-full"
              placeholder="Search..."
            />
            <button type="submit">
              <CiSearch size={18} />
            </button>
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

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          showSidebar
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 backdrop-blur-xl bg-black/40 transition-all duration-300 ease-in-out ${
            showSidebar ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setShowSidebar(false)}
        ></div>
        <div
          className={`fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-white to-gray-50 text-black overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 shadow-sm">
            <div className="p-6 flex justify-between items-center">
              <Link
                to="/"
                className="text-orange-500 font-bold text-xl capitalize tracking-wide"
                onClick={() => setShowSidebar(false)}
              >
                next<span className="text-blue-500">tech</span>
              </Link>
              <button
                onClick={() => setShowSidebar(false)}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Search Bar */}
            <div className="px-6 pb-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 pl-10 bg-gray-100 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  placeholder="Search products..."
                />
                <CiSearch
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </form>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="p-4 overflow-hidden">
            <ul className="space-y-1 overflow-y-auto max-h-[calc(100vh-280px)]">
              {navLinks.map((item) => (
                <li key={item.id} className="rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between group">
                    <Link
                      to={item.link}
                      className="flex-1 px-4 py-3 text-sm font-medium capitalize hover:text-orange-500 transition-colors duration-200 rounded-lg hover:bg-orange-50"
                      onClick={() => setShowSidebar(false)}
                    >
                      {item.title}
                    </Link>
                    {item.subMenu && (
                      <button
                        onClick={() => toggleMobileItem(item.id)}
                        className="p-2 mr-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                      >
                        <div
                          className={`transition-transform duration-300 ease-in-out ${
                            expandedMobileItems.has(item.id)
                              ? "rotate-45"
                              : "rotate-0"
                          }`}
                        >
                          <IoAdd size={18} />
                        </div>
                      </button>
                    )}
                  </div>
                  {item.subMenu && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedMobileItems.has(item.id)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="ml-6 space-y-1 mt-1">
                        {item.subMenu.map((subItem) => (
                          <li key={subItem.id} className="rounded-lg">
                            <Link
                              to={subItem.link}
                              className="block px-4 py-2 text-xs capitalize text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                              onClick={() => setShowSidebar(false)}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <MdPeopleAlt className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">Account</p>
                  <p className="text-xs text-gray-500">
                    <Link
                      to="/login"
                      className="hover:text-orange-500 transition-colors duration-200"
                      onClick={() => setShowSidebar(false)}
                    >
                      Login
                    </Link>
                    {" / "}
                    <Link
                      to="/register"
                      className="hover:text-orange-500 transition-colors duration-200"
                      onClick={() => setShowSidebar(false)}
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-sm"
                onClick={() => setShowSidebar(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navlinks */}
      <div className="shadow">
        <ul className="hidden lg:flex justify-between items-start gap-2 w-4/5 mx-auto">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <NavLink
                to={item.link}
                className="text-xs capitalize flex items-center gap-1 py-2"
              >
                {item.title}
              </NavLink>

              {item.subMenu && hoveredItem === item.id && (
                <ul className="absolute top-full left-0 bg-white shadow-lg shadow-gray-300 rounded-sm w-52 z-50">
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.id} className="relative group/submenu">
                      <Link
                        to={subItem.link}
                        className="px-3 py-2 text-xs capitalize hover:bg-orange-400 hover:text-white flex items-center justify-between"
                      >
                        {subItem.title}
                        {subItem.subMenu && <IoChevronForward size={12} />}
                      </Link>
                      {subItem.subMenu && (
                        <ul className="absolute top-0 left-full bg-white shadow-lg rounded-sm w-52 hidden group-hover/submenu:block">
                          {subItem.subMenu.map((subSubItem) => (
                            <li key={subSubItem.id}>
                              <Link
                                to={subSubItem.link}
                                className="block px-3 py-2 text-xs capitalize hover:bg-orange-400 hover:text-white"
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
      </div>
    </>
  );
};

export default Navbar;
