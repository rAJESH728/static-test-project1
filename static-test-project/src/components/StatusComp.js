import { BsThreeDots, BsPlus } from "react-icons/bs";
import SmallComp from "./SmallComp";

function StatusComp() {
    return ( 
        <div className="inline-block">
        <div className="inline-block bg-zinc-100 box-border h-auto rounded-md w-96 p-4 border-0 m-2">
          <h1 className="inline-block" >To do</h1>
          <h1 className="inline-block bg-gray-200 w-6 h-6 pl-2 ml-2 rounded-full" >3</h1>
          <button className="ml-2 float-right" ><BsThreeDots className=" inline-block bg-gray-200 w-6 h-6 float-right rounded-full px-1" /></button>
          <button className="ml-2 float-right" ><BsPlus className=" inline-block bg-gray-200 w-6 h-6 float-right rounded-full" /></button>
          <SmallComp />
          <SmallComp />
          </div>
        </div>
     );
}

export default StatusComp;