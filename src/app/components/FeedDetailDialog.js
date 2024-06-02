"use client";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import SupplyDialog from "./SupplyDialog";

const FeedDetailDialog = ({ open, onClose }) => {
  const [swipedIndex, setSwipedIndex] = useState(null);
  const [supplyDialog, setSupplyDialog] = useState(false);

  if (!open) return null;

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

  const detailData = [
    {
      create_time: "11:50",
      supply_list: [
        {
          supply_name: "飼料1號",
          weight_kg: 5,
          weight_money: 5,
        },
        {
          supply_name: "肥料1號",
          weight_kg: 5,
          weight_money: 5,
        },
      ],
    },
    {
      create_time: "09:30",
      supply_list: [
        {
          supply_name: "飼料3號",
          weight_kg: 5,
          weight_money: 5,
        },
      ],
    },
    {
      create_time: "08:00",
      supply_list: [
        {
          supply_name: "肥料2號",
          weight_kg: 5,
          weight_money: 5,
        },
      ],
    },
    {
      create_time: "07:43",
      supply_list: [
        {
          supply_name: "藥品2號",
          weight_kg: 5,
          weight_money: 5,
        },
      ],
    },
    {
      create_time: "06:20",
      supply_list: [
        {
          supply_name: "藥品4號",
          weight_kg: 5,
          weight_money: 5,
        },
        {
          supply_name: "肥料4號",
          weight_kg: 5,
          weight_money: 5,
        },
      ],
    },
  ];

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={onClose}
      >
        <div
          className="bg-grey-blue p-3 rounded-lg shadow-lg relative w-11/12 max-w-md h-5/6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-cneter justify-between mt-1 ml-2">
            <h1 className="text-slate-400 text-xl font-semibold mt-1">
              餵養記錄
            </h1>
            <div className="flex">
              <button className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center m-2 shadow-2xl">
                <IoIosArrowBack className="text-grey-blue stroke-2 text-xl" />
              </button>
              <button className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center m-2 shadow-2xl">
                <IoIosArrowForward className="text-grey-blue stroke-2 text-xl" />
              </button>
            </div>
          </div>
          <h1 className="text-slate-400 text-xl font-semibold mt-0.5 ml-2">
            第3批次-01白蝦池
          </h1>
          <h1 className="text-slate-400 text-xl font-semibold my-6 ml-10">
            2022/01/20
          </h1>
          <div className="flex flex-col h-3/4 overflow-y-auto">
            {detailData.map((d, index) => (
              <div
                className="border border-slate-400 text-slate-400 text-xl font-semibold rounded-md flex"
                key={index}
                onTouchStart={(e) => handleStart(e)}
                onTouchMove={(e) => handleMove(e, index)}
                onTouchEnd={(e) => handleEnd(e)}
                onMouseDown={(e) => handleStart(e)}
                onMouseMove={(e) => handleMove(e, index)}
                onMouseUp={(e) => handleEnd(e)}
                onMouseLeave={(e) => handleEnd(e)}
                onClick={
                  swipedIndex !== index ? () => setSupplyDialog(true) : null
                }
              >
                <div className={`${swipedIndex === index ? "-ml-3" : ""}`}>
                  <h1 className="m-2">{d.create_time}</h1>
                  {d.supply_list.map((s, index) => (
                    <div className="flex my-2.5" key={index}>
                      <p className="ml-3">{s.supply_name}</p>
                      <p className="ml-14">{s.weight_kg}</p>
                      <p className="ml-2">公斤</p>
                      <p className="ml-5">{s.weight_money}</p>
                      <p className="ml-2">元/公斤</p>
                    </div>
                  ))}
                </div>
                {swipedIndex === index && (
                  <button className="my-auto ml-3 w-8 h-8 rounded-full bg-red-300 flex items-center justify-center shadow-lg">
                    <FaTrash className="text-xl text-white" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            className="absolute bottom-10 right-10 bg-teal-900 text-white hover:bg-white hover:text-teal-900 text-xl rounded-3xl w-18 py-2 px-4 shadow-2xl"
            onClick={onClose}
          >
            確定
          </button>
        </div>
      </div>
      <SupplyDialog
        open={supplyDialog}
        onClose={() => setSupplyDialog(false)}
      />
    </>
  );
};

export default FeedDetailDialog;
