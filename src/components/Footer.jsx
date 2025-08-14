import { Link } from "react-router-dom";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoInstagram,
} from "react-icons/io5";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* SUPPORT Section */}
            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-white font-bold text-md lg:text-sm xl:text-xs uppercase tracking-widest mb-8">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Support
                </span>
              </h3>

              {/* Phone Contact */}
              <div className="group bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl p-6 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IoCallOutline className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm lg:text-sm xl:text-xs text-gray-400 font-medium">
                      9 AM - 8 PM
                    </p>
                    <p className="text-orange-500 font-bold text-2xl lg:text-xl xl:text-lg tracking-wide">
                      16793
                    </p>
                  </div>
                </div>
              </div>

              {/* Store Locator */}
              <div className="group bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl p-6 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IoLocationOutline className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm lg:text-sm xl:text-xs text-gray-400 font-medium">
                      Store Locator
                    </p>
                    <p className="text-orange-500 font-bold text-lg lg:text-sm xl:text-xs">
                      Find Our Stores
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT US Section */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold text-md lg:text-sm xl:text-xs uppercase tracking-widest mb-8 ">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  About Us
                </span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <Link
                    to="/affiliate"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Affiliate Program
                    </span>
                  </Link>
                  <Link
                    to="/delivery"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Online Delivery
                    </span>
                  </Link>
                  <Link
                    to="/refund"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Refund Policy
                    </span>
                  </Link>
                  <Link
                    to="/blog"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Blog
                    </span>
                  </Link>
                </div>
                <div className="space-y-4">
                  <Link
                    to="/emi"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      EMI Terms
                    </span>
                  </Link>
                  <Link
                    to="/privacy"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Privacy Policy
                    </span>
                  </Link>
                  <Link
                    to="/star-point"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Star Point Policy
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Contact Us
                    </span>
                  </Link>
                </div>
                <div className="space-y-4">
                  <Link
                    to="/about"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      About Us
                    </span>
                  </Link>
                  <Link
                    to="/terms"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Terms & Conditions
                    </span>
                  </Link>
                  <Link
                    to="/career"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Career
                    </span>
                  </Link>
                  <Link
                    to="/brands"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Brands
                    </span>
                  </Link>
                </div>
                <div className="space-y-4">
                  <Link
                    to="/support"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Support Center
                    </span>
                  </Link>
                  <Link
                    to="/faq"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      FAQ
                    </span>
                  </Link>
                  <Link
                    to="/shipping"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Shipping Info
                    </span>
                  </Link>
                  <Link
                    to="/track-order"
                    className="block text-sm lg:text-sm xl:text-xs font-medium hover:text-orange-500 transition-all duration-200 hover:translate-x-2 group"
                  >
                    <span className="group-hover:bg-orange-500/10 px-2 py-1 rounded-md transition-colors duration-200">
                      Track Order
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* STAY CONNECTED Section */}
            <div className="space-y-6 lg:col-span-1">
              <h3 className="text-white font-bold text-md lg:text-sm xl:text-xs uppercase tracking-widest mb-8 ">
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Stay Connected
                </span>
              </h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300">
                  <p className="text-white font-bold text-lg lg:text-sm xl:text-xs mb-3">
                    Star Tech Ltd
                  </p>
                  <p className="text-sm lg:text-sm xl:text-xs text-gray-300 leading-relaxed">
                    Head Office: 28 Kazi Nazrul Islam Ave, Navana Zohura Square,
                    Dhaka 1000
                  </p>
                  <div className="flex items-center space-x-3 mt-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <IoMailOutline className="text-white text-sm" />
                    </div>
                    <div>
                      <span className="text-sm lg:text-sm xl:text-xs text-gray-400">
                        Email:{" "}
                      </span>
                      <a
                        href="mailto:webteam@startechbd.com"
                        className="text-orange-500 hover:text-orange-400 transition-colors font-medium text-sm lg:text-sm xl:text-xs"
                      >
                        webteam@startechbd.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col xl:flex-row items-center justify-between space-y-6 xl:space-y-0">
              {/* Copyright */}
              <div className="text-sm lg:text-sm xl:text-xs font-medium text-gray-400">
                © 2025 Star Tech Ltd | All rights reserved
              </div>

              {/* App Downloads */}
              <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
                <p className="text-sm lg:text-sm xl:text-xs text-gray-400 font-medium">
                  Experience Star Tech App on your mobile:
                </p>
                <div className="flex space-x-3">
                  <button className="group flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-orange-500 hover:to-orange-600 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <FaGooglePlay className="text-orange-500 group-hover:text-white transition-colors" />
                    <span className="text-xs lg:text-xs xl:text-xs font-medium group-hover:text-white transition-colors">
                      Download on Google Play
                    </span>
                  </button>
                  <button className="group flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-orange-500 hover:to-orange-600 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    <FaApple className="text-orange-500 group-hover:text-white transition-colors" />
                    <span className="text-xs lg:text-xs xl:text-xs font-medium group-hover:text-white transition-colors">
                      Download on App Store
                    </span>
                  </button>
                </div>
              </div>

              {/* Social Media & Powered By */}
              <div className="flex items-center space-x-8">
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="group w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <IoLogoWhatsapp
                      className="text-gray-400 group-hover:text-white transition-colors"
                      size={18}
                    />
                  </a>
                  <a
                    href="#"
                    className="group w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <IoLogoFacebook
                      className="text-gray-400 group-hover:text-white transition-colors"
                      size={18}
                    />
                  </a>
                  <a
                    href="#"
                    className="group w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <IoLogoYoutube
                      className="text-gray-400 group-hover:text-white transition-colors"
                      size={18}
                    />
                  </a>
                  <a
                    href="#"
                    className="group w-10 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center hover:border-orange-500 hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <IoLogoInstagram
                      className="text-gray-400 group-hover:text-white transition-colors"
                      size={18}
                    />
                  </a>
                </div>

                {/* Powered By */}
                <div className="text-sm lg:text-sm xl:text-xs text-gray-400 font-medium border-l border-gray-600 pl-6">
                  Powered By:{" "}
                  <span className="text-orange-500 font-bold">Star Tech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
