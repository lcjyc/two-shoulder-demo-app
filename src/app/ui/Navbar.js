import { FaBell } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 bg-teal-500 z-10 py-3">
      <div className="flex justify-end">
        <div className="mx-2 relative">
          <FaBell className="text-grey-blue text-3xl stroke-1" />
          <div className="absolute top-1 right-0.5 w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center">
            1
          </div>
        </div>
        <div className="mx-2">
          <RxExit className="text-grey-blue text-3xl stroke-1" />
        </div>

        <div className="ml-2 mr-4 w-8 h-8 rounded-full bg-grey-blue flex items-center justify-center">
          <p className="text-teal-500 text-sm font-bold">小明</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
