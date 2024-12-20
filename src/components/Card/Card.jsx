import React, { useContext } from "react";
import arr from "../../assets/svg/Svgs";
import color from "../../assets/colors/Color";
import { menuContext } from "../../Context/menuContext";

// const data = require("../../../data.json")
import data from "../../../data.json";

const Card = ({ index }) => {
  let h = 1;
  const { item } = useContext(menuContext);
  const Icon = ({ svg: SvgIcon }) => {
    return <SvgIcon />;
  };
  return (
    <>
      <div className="">
        <div
          className={`absolute bg-[${color[index]}] w-[100%] sm:w-[29%] sm:h-[48%] max-h-600px text-3xl rounded-xl contain-content min-w-[125px] hover:scale-[101%]`}
          style={{ backgroundColor: color[index] }}
        >
          <div className="relative left-[60%] z-[1] ">
            {arr[index]}
            {/* <svg width="79" height={(h==1)? "39": "79"} xmlns="http://www.w3.org/2000/svg"><path d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z" fill="#D96C47" fill-rule="nonzero"/></svg> */}
          </div>

          <div className="relative top-[0%] sm:w-[100%] h-[150px] sm:h-[87%] bg-[#1d204b] hover:bg-[#414476] transition ease-in duration-300 rounded-xl z-[5]">
            <div className="hover:cursor-pointer relative top-[20%] sm:left-[75%] left-[85%] h-[7%] flex item-">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <p className="text-white text-sm sm:px-[12.5%] rubik sm:py-[7%] p-4 font-semibold">
              {data[index].title}
            </p>

            <div className="rubik px-2">
              <div className="text-white sm:w-[170px] mx-auto text-4xl my-[3%] grid grid-cols-2 sm:grid-cols-none">
                <div className="px-4 sm:p-0">
                {data[index].timeframes[item].current}hrs
                </div>
                <div className="text-[#5d6f9a] sm:text-xs text-sm my-auto p-[10%] sm:px-0 py-3 text-end sm:text-start">
                  Last Week- {data[index].timeframes[item].previous}hrs
                </div>
              </div>
              {/* <div className='text-sm'>{`Menu is ${item}`}</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card2 = () => {
  let h = 1;
  return (
    <div className="bg-[#FF8B64] w-[190px] h-[170px] text-3xl rounded-xl relative flex-shrink-0">
      <div className="absolute left-[60%] z-[1]">
        <svg
          width="79"
          height={h === 1 ? "39" : "79"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z"
            fill="#D96C47"
            fillRule="nonzero"
          />
        </svg>
      </div>
      <div className="relative w-full h-[83%] bg-[#1D204B] rounded-xl z-[5]">
        <div className="absolute top-[20%] left-[75%]">
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-white text-sm px-5 py-4">Work</p>
        <div className="text-white w-[170px] mx-auto text-4xl my-3">
          32hrs
          <div className="text-gray-600 text-xs my-1">Last Week- 36hrs</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
