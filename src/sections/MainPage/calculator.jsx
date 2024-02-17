import React, { useState } from "react";

const CalculatorSection = () => {
  const [quality, setQuality] = useState(1);
  const [insideCameras, setInsideCameras] = useState(0);
  const decreace = (state, setState) => {
    state > 0 && setState((c) => c - 1);
  };
  return (
    <div className="px-12 py-8 border-b border-cyan-700">
      <h2 className="mb-8 text-center text-[24px] font-semibold">
        Предварительный рассчет стоимости
      </h2>
      <h3 className="mb-4 text-[18px]">Качество изображения</h3>
      <div className="flex gap-4 mb-6 text-[24px] max-md:flex-col">
        <span>
          <input
            type="radio"
            name="quality"
            id="hd"
            defaultChecked
            onChange={() => setQuality(1)}
            className="mr-4"
          />
          <label htmlFor="hd">HD</label>
        </span>
        <span>
          <input
            type="radio"
            name="quality"
            id="fhd"
            onChange={() => setQuality(2)}
            className="mr-4 "
          />
          <label htmlFor="fhd">Full-HD</label>
        </span>
        <span>
          <input
            type="radio"
            name="quality"
            id="4k"
            onChange={() => setQuality(3)}
            className="mr-4"
          />
          <label htmlFor="4k">4k</label>
        </span>
      </div>
      <h3 className="mb-4 text-[18px]">Количество камер</h3>
      <img
        src="../assets/icons/camera.png"
        alt="camicon"
        className="w-[100px] mb-4 max-md:mx-auto"
      />
      <div className="flex justify-between max-md:flex-col max-md:gap-8 max-md:items-center">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => decreace(insideCameras, setInsideCameras)}
            className="w-[40px] py-2 text-[18px] font-bold rounded-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            -
          </button>
          <p className="font-semibold text-[18px]">{insideCameras}</p>
          <button
            onClick={() => setInsideCameras((c) => c + 1)}
            className="w-[40px] py-2 text-[18px] font-bold rounded-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            +
          </button>
        </div>
        <p className="tracking-wide	font-semibold text-blue-800 text-[24px]">
          ~{insideCameras * 1600 * quality} ₽
        </p>
      </div>
    </div>
  );
};

export default CalculatorSection;
