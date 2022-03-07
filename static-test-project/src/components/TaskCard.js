import { MdOutlineAttachFile, MdAccessTimeFilled } from "react-icons/md";
import { BsFillFlagFill } from "react-icons/bs";

function TaskCard(props) {
    return ( 
        <div className=" px-2 py-4 " >
            <div className=" px-3 bg-white border drop-shadow-sm rounded-t-lg">
            <h1 className="font-medium text-[14px] mx-2 mt-4">{props.onTabHead}</h1>
            <p className="mx-2 font-light text-[13px]" >{props.onTabPara}</p>
            <p className={`inline-block text-[10px] ${props.onTabAuthorColor} rounded-sm m-2 p-1`}>{props.onTabAuthor}</p>
            </div>
            <div className="bg-white border drop-shadow-sm border-t-0 rounded-b-lg px-4 py-2.5">
                <MdOutlineAttachFile className={`inline-block text-[16px] ${props.onTabAttach.length<=0?'text-gray-300':'text-gray-500'}`}/>
                <p className={`inline-block text-[12px] pl-1 text-gray-500`}>{props.onTabAttach}</p>
                <BsFillFlagFill className={`inline-block ml-5 ${props.onTabFlagColor} `} />
                <MdAccessTimeFilled className="inline-block text-[18px] ml-5 text-gray-400"/>
                <p className="inline-block text-gray-500 ml-1 text-[12px] font-medium">{props.onTabDate}</p>

            </div>

        </div>
     );
}

export default TaskCard;