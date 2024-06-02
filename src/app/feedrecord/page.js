"use client";
import Link from "next/link";
import { useRef } from "react";
import {
  FaAngleDown,
  FaSearch,
  FaArrowUp,
  FaArrowDown,
  FaHome,
} from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

const Feedrecord = () => {
  const batchRef = useRef(null);

  const batchData = [
    {
      id: "01",
      name: "白蝦池",
      batch: "第四批次",
    },
    {
      id: "02",
      name: "龍膽石斑魚池",
      batch: "第三批次",
    },
    {
      id: "03",
      name: "白蝦池",
      batch: "第二批次",
    },
    {
      id: "04",
      name: "龍膽石斑魚池",
      batch: "第二批次",
    },
    {
      id: "03",
      name: "白蝦池",
      batch: "第三批次",
    },
    {
      id: "04",
      name: "龍膽石斑魚池",
      batch: "第一批次",
    },
  ];

  const scrollUp = () => {
    if (batchRef.current) {
      batchRef.current.scrollBy({ top: -100, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (batchRef.current) {
      batchRef.current.scrollBy({ top: 100, behavior: "smooth" });
    }
  };

  return (
    <div className="h-[calc(100vh-68px)]">
      <Link href={"/"}>
        <IoIosArrowBack className="text-grey-blue absolute top-3 left-2 text-3xl z-10 stroke-1" />
      </Link>
      <div className="flex items-cneter justify-between mt-3 ml-2 mr-4">
        <h1 className="text-slate-400 text-xl font-semibold mt-1">餵養記錄</h1>
        <button className="flex items-center justify-center w-32 text-slate-400 bg-white p-2 rounded-3xl font-semibold shadow-md">
          屏東歸來廠
          <FaAngleDown className="text-teal-500 text-2xl pl-3" />
        </button>
      </div>
      <div className="flex justify-end mt-4 mr-4">
        <div className="flex items-center justify-between w-80 bg-white px-2 py-1.5 rounded-3xl font-semibold shadow-md">
          <div className="w-80 text-slate-400">
            <input
              type="text"
              placeholder="請輸入關鍵字查詢"
              className="placeholder-gray-300"
            />
          </div>
          <FaSearch className="text-teal-500 text-2xl" />
        </div>
      </div>
      <div className="flex h-3/4">
        <div
          ref={batchRef}
          className="flex flex-col overflow-y-hidden h-full w-full mt-4"
        >
          {batchData.map((b, index) => (
            <Link href={`/feedrecord/${b.id}`} key={index}>
              <div className="w-8/12 mx-auto mb-4 bg-red-300 rounded-lg shadow-xl p-3">
                <div className="flex justify-between items-center">
                  <h2 className="text-white text-2xl">{b.id}</h2>
                  <MdEdit className="text-white text-2xl" />
                </div>
                <h1 className="text-3xl text-white mt-2">{b.name}</h1>
                <p className="text-white text-xl mt-20 mb-10">{b.batch}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="absolute right-4 top-5/6 h-3/4 flex flex-col items-center justify-between ml-2">
          <button onClick={scrollUp} className="text-teal-200 text-3xl mt-4">
            <FaArrowUp />
          </button>
          <button onClick={scrollDown} className="text-teal-200 text-3xl mb-10">
            <FaArrowDown />
          </button>
        </div>
      </div>
      <Link href="/">
        <div className="absolute right-8 bottom-4 bg-teal-400 w-12 h-12 rounded-full flex items-center justify-center">
          <FaHome className="text-white text-3xl" />
        </div>
      </Link>
    </div>
  );
};

export default Feedrecord;
