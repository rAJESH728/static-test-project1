import { MdOutlineAttachFile, MdAccessTimeFilled } from "react-icons/md";
import { BsFillFlagFill } from "react-icons/bs";

function SmallComp() {
    return ( 
        <div className=" p-5" >
            <div className="bg-white border-2 drop-shadow-lg rounded-t-lg">
            <h1 className="font-medium m-4">Mobile Wireframes</h1>
            <p className="ml-4" >Some methods may be better than<br/>others, depending on time
            constraints,<br/> system maturity,type of product...</p>
            <p className="inline-block text-xs bg-green-100 text-green-500 rounded-sm m-5 p-2 ">VIVERRA DIAM</p>
            </div>
            <div className="bg-white border-2 drop-shadow-lg border-t-0 rounded-b-lg p-4">
                <MdOutlineAttachFile className="inline-block text-xl text-gray-500"/>
                <p className="inline-block text-s pl-1 text-gray-500">3</p>
                <BsFillFlagFill className="inline-block ml-5 text-red-600 " />
                <MdAccessTimeFilled className="inline-block text-xl ml-5 text-gray-500"/>
                <p className="inline-block text-gray-500 ml-1 text-xs font-medium">Apr 12</p>

            </div>

        </div>
     );
}

export default SmallComp;