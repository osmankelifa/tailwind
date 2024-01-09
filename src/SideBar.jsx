import { FaDiscord } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";
import { FaFrog } from "react-icons/fa";
import { FaHorse } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen
      w-16 m-0 flex flex-col bg-gray-900
      text-white shadow-lg"
    >
      <SideBarIcon icon={<FaDiscord size="28" />} />
      <SideBarIcon icon={<FaHeartBroken size="28" />} />
      <SideBarIcon icon={<FaFrog size="28" />} />
      <SideBarIcon icon={<FaHorse size="28" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = "HELP!" }) => (
  <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default SideBar;
