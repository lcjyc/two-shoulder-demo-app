import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaFishFins } from "react-icons/fa6";

const Home = () => {
  const buttonArray = [
    { href: "#", text: "養殖監控" },
    { href: "#", text: "進水排水" },
    { href: "#", text: "養水消毒" },
    { href: "#", text: "批次記錄" },
    { href: "#", text: "放苗記錄" },
    { href: "/feedrecord", text: "餵養記錄" },
    { href: "#", text: "量測記錄" },
    { href: "#", text: "收成記錄" },
    { href: "#", text: "包裝記錄" },
  ];

  return (
    <div>
      <div className="flex justify-end mt-3 mr-4">
        <button className="flex items-center justify-center w-32 text-slate-400 bg-white p-2 rounded-3xl font-semibold shadow-md">
          屏東歸來廠
          <FaAngleDown className="text-teal-500 text-2xl pl-3" />
        </button>
      </div>
      <div className="mt-3 mx-2 p-1 bg-teal-800">
        <div className="flex justify-end mr-10 pt-6">
          <h4 className="text-white text-xl">星期一</h4>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-full bg-teal-400 flex items-center justify-center ml-2">
            <FaPlus className="text-white text-2xl text-bold" />
          </div>
          <div className="flex items-end justify-end mr-10">
            <h2 className="text-white text-xl">十一月廿九</h2>
            <h1 className="text-white text-5xl">01/01</h1>
          </div>
        </div>
        <div className="bg-grey-blue flex flex-col m-2 p-2 rounded-sm">
          <p className="text-slate-400 font-medium">2022/01/01　11:00</p>
          <p className="text-slate-400 font-medium">
            昨晚所放的飼料都有吃完，水色正常
          </p>
        </div>
        <div className="bg-grey-blue flex flex-col m-2 p-2 rounded-sm">
          <p className="text-slate-400 font-medium">2022/01/01　09:00</p>
          <p className="text-slate-400 font-medium">需要預購聯豐蝦粉，</p>
          <p className="text-slate-400 font-medium">特價只到01/10預定10包</p>
        </div>
      </div>
      <div className="mt-3 mx-1 flex flex-wrap">
        {buttonArray.map((b, index) => (
          <div className="w-1/3" key={index}>
            <Link href={b.href}>
              <div className="m-1 py-4 flex flex-col items-center justify-center bg-white rounded-md shadow-md hover:bg-red-600 hover:text-white group">
                <FaFishFins className="text-teal-600 text-6xl group-hover:text-white" />
                <p className="text-teal-600 text-xl group-hover:text-white">
                  {b.text}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
