import { MdOutlineAttachFile, MdAccessTimeFilled } from "react-icons/md";
import { BsFillFlagFill } from "react-icons/bs";

function TaskCard(props) {
        // var authorColor = 'orange';
        
        // if (props.onTabAuthorColor === 'green'){authorColor="green"}
        // else if(props.onTabAuthorColor === 'orange'){authorColor="orange"}
        // else if(props.onTabAuthorColor === 'violet'){authorColor="violet"}
        // else {authorColor="blue"}
        // console.log(authorColor);
    return ( 
        <div className="w-80 px-2 py-4 " >
            <div className=" px-3 bg-white border-2 drop-shadow-lg rounded-t-lg">
            <h1 className="font-medium mx-2 my-4">{props.onTabHead}</h1>
            <p className="mx-2 text-sm" >{props.onTabPara}</p>
            <p className={`inline-block text-xs ${props.onTabAuthorColor} rounded-sm m-5 p-2`}>{props.onTabAuthor}</p>
            </div>
            <div className="bg-white border-2 drop-shadow-lg border-t-0 rounded-b-lg p-4">
                <MdOutlineAttachFile className={`inline-block text-xl ${props.onTabAttach.length<=0?'text-gray-300':'text-gray-500'}`}/>
                <p className={`inline-block text-s pl-1 text-gray-500`}>{props.onTabAttach}</p>
                <BsFillFlagFill className={`inline-block ml-5 ${props.onTabFlagColor} `} />
                <MdAccessTimeFilled className="inline-block text-xl ml-5 text-gray-500"/>
                <p className="inline-block text-gray-500 ml-1 text-xs font-medium">{props.onTabDate}</p>

            </div>

        </div>
     );
}

export default TaskCard;