"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  FaAngleDown,
  FaCalendar,
  FaPlus,
  FaArrowUp,
  FaArrowDown,
  FaHome,
  FaTrash,
} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import FeedDetailDialog from "@/app/components/FeedDetailDialog";

const BatchDetail = () => {
  const batchRef = useRef(null);
  const [swipedIndex, setSwipedIndex] = useState(null);
  const [feedDetailDialog, setFeedDetailDialog] = useState(false);

  const dateData = [
    "2022/01/20",
    "2022/01/18",
    "2022/12/15",
    "2022/12/14",
    "2022/12/10",
    "2022/12/07",
    "2022/12/05",
    "2022/12/04",
    "2022/12/01",
  ];

  const handleStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    e.currentTarget.initialX = clientX;
    e.currentTarget.isSwiping = true;
  };

  const handleMove = (e, index) => {
    if (!e.currentTarget.isSwiping) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const diffX = clientX - e.currentTarget.initialX;

    // Check if swiping left
    if (diffX < -20) {
      setSwipedIndex(index);
    }

    if (swipedIndex !== null && diffX > 20) {
      setSwipedIndex(null);
    }
  };

  const handleEnd = (e) => {
    e.currentTarget.isSwiping = false;
  };

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
    <>
      <div className="h-screen">
        <Link href={"/feedrecord"}>
          <IoIosArrowBack className="text-grey-blue absolute top-3 left-2 text-3xl z-10 stroke-1" />
        </Link>
        <div className="flex items-cneter justify-between mt-3 ml-2 mr-4">
          <h1 className="text-slate-400 text-xl font-semibold mt-1">
            01　白蝦池
          </h1>
          <button className="flex items-center justify-center w-32 text-slate-400 bg-white p-2 rounded-3xl font-semibold shadow-md">
            屏東歸來廠
            <FaAngleDown className="text-teal-500 text-2xl pl-3" />
          </button>
        </div>
        <div className="flex items-center mt-4 mr-4">
          <div className="flex items-center justify-between w-64 bg-sky-50 px-4 py-2 ml-2 rounded-3xl font-semibold shadow-md">
            <h1 className="text-slate-400">2022/01/01　00:00</h1>
            <FaCalendar className="text-teal-400" />
          </div>
          <h1 className="text-3xl text-teal-600 mx-5">～</h1>
          <div className="bg-teal-400 w-12 h-12 rounded-full flex items-center justify-center">
            <FaPlus className="text-white text-3xl" />
          </div>
        </div>
        <div className="flex items-center justify-between w-64 bg-sky-50 px-4 py-2 ml-20 mt-1 rounded-3xl font-semibold shadow-md">
          <h1 className="text-slate-400">2022/01/20　12:00</h1>
          <FaCalendar className="text-teal-400" />
        </div>
        <h1 className="text-slate-400 mt-5 ml-2 -mb-1 font-semibold">
          目前共{dateData.length}筆資料
        </h1>
        <div className="flex ml-2 h-4/6">
          <div
            ref={batchRef}
            className="flex flex-col overflow-y-hidden h-full w-full"
          >
            {dateData.map((d, index) => (
              <div
                className="relative flex items-center justify-start w-80 bg-sky-50 cursor-pointer px-4 py-3 mt-4 rounded-3xl font-semibold shadow-md overflow-hidden"
                key={index}
                onTouchStart={(e) => handleStart(e)}
                onTouchMove={(e) => handleMove(e, index)}
                onTouchEnd={(e) => handleEnd(e)}
                onMouseDown={(e) => handleStart(e)}
                onMouseMove={(e) => handleMove(e, index)}
                onMouseUp={(e) => handleEnd(e)}
                onMouseLeave={(e) => handleEnd(e)}
                onClick={
                  swipedIndex !== index ? () => setFeedDetailDialog(true) : null
                }
              >
                <div className={`flex ${swipedIndex === index ? "-ml-3" : ""}`}>
                  <h1 className="text-slate-400">{d}</h1>
                  <p className="text-slate-400 ml-3">第三批次-餵養記錄</p>
                </div>
                {swipedIndex === index && (
                  <button className="absolute right-4 w-8 h-8 rounded-full bg-red-300 flex items-center justify-center shadow-lg">
                    <FaTrash className="text-xl text-white" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="absolute right-4 top-5/6 h-4/6 flex flex-col items-center justify-between ml-2">
            <button onClick={scrollUp} className="text-teal-200 text-3xl mt-5">
              <FaArrowUp />
            </button>
            <button
              onClick={scrollDown}
              className="text-teal-200 text-3xl mb-6"
            >
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
      <FeedDetailDialog
        open={feedDetailDialog}
        onClose={() => setFeedDetailDialog(false)}
      />
    </>
  );
};

export default BatchDetail;
