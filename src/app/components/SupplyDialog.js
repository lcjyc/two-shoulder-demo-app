"use client";
import { useState } from "react";

const SupplyDialog = ({ open, onClose }) => {
  if (!open) return null;

  const [supplyIndex, setSupplyIndex] = useState(0);

  const [supplyList, setSupplyList] = useState([
    {
      supply_name: "飼料",
      supply_item: [
        { name: "飼料1號", weight: 5, cost: 5, selected: true },
        { name: "飼料2號", weight: "", cost: "", selected: false },
        { name: "飼料3號", weight: "", cost: "", selected: false },
        { name: "飼料4號", weight: "", cost: "", selected: false },
        { name: "飼料5號", weight: "", cost: "", selected: false },
        { name: "飼料6號", weight: "", cost: "", selected: false },
        { name: "飼料7號", weight: "", cost: "", selected: false },
      ],
    },
    {
      supply_name: "營養品",
      supply_item: [
        { name: "營養品1號", weight: "", cost: "", selected: false },
        { name: "營養品2號", weight: "", cost: "", selected: false },
        { name: "營養品3號", weight: "", cost: "", selected: false },
        { name: "營養品4號", weight: "", cost: "", selected: false },
        { name: "營養品5號", weight: "", cost: "", selected: false },
        { name: "營養品6號", weight: "", cost: "", selected: false },
        { name: "營養品7號", weight: "", cost: "", selected: false },
      ],
    },
    {
      supply_name: "藥品",
      supply_item: [
        { name: "藥品1號", weight: "", cost: "", selected: false },
        { name: "藥品2號", weight: "", cost: "", selected: false },
        { name: "藥品3號", weight: "", cost: "", selected: false },
        { name: "藥品4號", weight: "", cost: "", selected: false },
        { name: "藥品5號", weight: "", cost: "", selected: false },
        { name: "藥品6號", weight: "", cost: "", selected: false },
        { name: "藥品7號", weight: "", cost: "", selected: false },
      ],
    },
    {
      supply_name: "添加品",
      supply_item: [
        { name: "肥料1號", weight: 5, cost: 5, selected: true },
        { name: "肥料2號", weight: "", cost: "", selected: false },
        { name: "肥料3號", weight: "", cost: "", selected: false },
        { name: "肥料4號", weight: "", cost: "", selected: false },
        { name: "肥料5號", weight: "", cost: "", selected: false },
        { name: "肥料6號", weight: "", cost: "", selected: false },
        { name: "肥料7號", weight: "", cost: "", selected: false },
      ],
    },
  ]);

  const handleSupplyClick = (e, index) => {
    setSupplyIndex(index);
  };

  const handleItemClick = (e, index) => {
    const newSupplyList = supplyList.map((supply, sIndex) => {
      if (sIndex === supplyIndex) {
        const newSupplyItem = supply.supply_item.map((item, iIndex) => {
          if (iIndex === index) {
            return { ...item, selected: !item.selected };
          }
          return item;
        });
        return { ...supply, supply_item: newSupplyItem };
      }
      return supply;
    });

    setSupplyList(newSupplyList);
  };

  const handleInputChange = (e, itemIndex, key) => {
    const newSupplyList = supplyList.map((supply, sIndex) => {
      if (sIndex === supplyIndex) {
        const newSupplyItem = supply.supply_item.map((item, iIndex) => {
          if (iIndex === itemIndex) {
            return { ...item, [key]: e.target.value };
          }
          return item;
        });
        return { ...supply, supply_item: newSupplyItem };
      }
      return supply;
    });

    setSupplyList(newSupplyList);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-grey-blue p-3 rounded-lg shadow-lg relative w-11/12 max-w-md h-5/6"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-slate-400 text-xl font-semibold mt-2 ml-2">
          餵養記錄
        </h1>

        <h1 className="text-slate-400 text-xl font-semibold mt-0.5 ml-2">
          第3批次-01白蝦池
        </h1>
        <h1 className="text-slate-400 text-xl font-semibold mt-6 ml-10">
          2022/01/20 11:50
        </h1>
        <div className="h-3/4 overflow-y-auto ">
          <div className="flex my-8">
            {supplyList.map((s, index) => (
              <button
                className={`${
                  supplyIndex === index
                    ? "bg-teal-700 text-grey-blue"
                    : "bg-sky-50 text-slate-400"
                } w-1/4 text-lg rounded-3xl shadow-2xl mx-2 py-1 font-semibold`}
                onClick={(e) => handleSupplyClick(e, index)}
                key={index}
              >
                {s.supply_name}
              </button>
            ))}
          </div>
          <div className="flex flex-col">
            {supplyList[supplyIndex].supply_item.map((x, index) => (
              <div className="flex mt-4" key={index}>
                <button
                  className={`${
                    x.selected
                      ? "bg-teal-700 text-grey-blue shadow-2xl"
                      : "bg-transparent text-slate-400"
                  } w-1/3 text-lg rounded-3xl mx-2 py-1 font-semibold`}
                  onClick={(e) => handleItemClick(e, index)}
                >
                  {x.name}
                </button>
                <div className="w-1/3 flex items-center text-lg rounded-3xl shadow-2xl mx-2 py-1 pl-4 font-semibold bg-sky-50 text-slate-400">
                  <input
                    value={x.weight}
                    className="bg-transparent w-2/5"
                    readOnly={!x.selected}
                    onChange={(e) => handleInputChange(e, index, "weight")}
                  ></input>
                  <p>公斤</p>
                </div>
                <div className="w-1/3 flex items-center text-lg rounded-3xl shadow-2xl mx-2 py-1 pl-2 font-semibold bg-sky-50 text-slate-400">
                  <input
                    value={x.cost}
                    className="bg-transparent w-1/3"
                    readOnly={!x.selected}
                    onChange={(e) => handleInputChange(e, index, "cost")}
                  ></input>
                  <p>元/公斤</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute bottom-10 left-10 bg-teal-400 text-white hover:bg-white hover:text-teal-400 text-xl rounded-3xl w-18 py-2 px-4 shadow-2xl"
          onClick={onClose}
        >
          取消
        </button>
        <button
          className="absolute bottom-10 right-10 bg-teal-900 text-white hover:bg-white hover:text-teal-900 text-xl rounded-3xl w-18 py-2 px-4 shadow-2xl"
          onClick={onClose}
        >
          確定
        </button>
      </div>
    </div>
  );
};

export default SupplyDialog;
