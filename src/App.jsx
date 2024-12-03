import { useState } from "react";
import {menuContext} from "./Context/menuContext";
// import './App.css'
import "./index.css";
import Card from "./components/Card/Card";
import Profile from "./components/Profile/Profile";
import profile from "../images/image-jeremy.png";

function App() {
  const [item, setItem] = useState("daily");

  let h = 1;
  return (
    <>
    <menuContext.Provider value ={{item, setItem}}>
      <div className="flex justify-center my-20 gap-[1.5%] flex-shrink-0 h-[70vh]">
        <div className="xl:w-[14%] lg:w-[23%] h-[100%] flex justify-center items-center flex-shrink-0 w-[20%] ">
          <Profile />
        </div>
        <div className="relative flex flex-col gap-[55%] w-[50%]">
        {/* <div className="relative flex flex-col gap-[55%] w-[45%]"> */}
          <div className=" grid grid-cols-3 min-w-[400px]">
            <div className="min-w-[100px]">
              <Card index={0} />
            </div>
            <div>
              <Card index={1} />
            </div>
            <div>
              <Card index={2} />
            </div>
          </div>
          <div className=" grid grid-cols-3 min-w-[400px]">
            <div className="min-w-[100px]">
              <Card index={3} />
            </div>
            <div>
              <Card index={4} />
            </div>
            <div>
              <Card index={5} />
            </div>
          </div>
          {/* <div className="abosulte flex gap-[32%]">
            <div className="flex flex-shrink-0">
            <Card />
            </div>
            <div>
            <Card />
            </div>
            <div>
              <Card />
            </div>
            </div> */}
          {/* <div className="flex gap-[32%] flex-shrink-0">
            <div className="flex ">
            <Card />
            </div>
            <div>
            <Card />
            </div>
            <div>
            <Card />
            </div>
            </div> */}
        </div>
      </div>
            </menuContext.Provider>
    </>
  );
}

export default App;
