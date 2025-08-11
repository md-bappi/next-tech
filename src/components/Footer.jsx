import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const support = [
  {
    id: 1,
    title: "Phone",
    content: "0123456789",
    icon: <FaPhoneAlt />,
  },
  {
    id: 2,
    title: "Store Locator",
    content: "Find Our Store",
    icon: <CiLocationOn />,
  },
];

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white text-center py-4">
      <div className=" flex flex-col justify-center items-center gap-4">
        <h2 className=" tracking-widest">Support</h2>
        {support.map((item) => (
          <div
            key={item.id}
            className=" flex items-center gap-5 border py-2 pl-4 pr-20 rounded-full border-gray-700"
          >
            {item.icon}
            <div className=" border-l border-gray-700  pl-5 ">
              <p className=" text-gray-400 font-light">{item.title}</p>
              <p className=" text-orange-600 font-semibold tracking-widest">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
