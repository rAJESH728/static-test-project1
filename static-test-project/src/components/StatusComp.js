import { BsThreeDots, BsPlus } from "react-icons/bs";
import TaskCard from "./TaskCard";

function StatusComp(props) {
    return ( 
        <div className="inline-block ml-8 w-[18.7rem]">
        <div className="align-top inline-block bg-zinc-100 box-border h-auto rounded-md w-full px-1 pt-4 border-0 ">
          <h1 className="inline-block text-[15px] px-2" >{props.onTitle}</h1>
          <h1 className="inline-block text-[15px] bg-gray-200 h-6 w-6 pl-2 ml-2 rounded-full" >{props.onCount}</h1>
          <button className="ml-2 mr-2 float-right" ><BsThreeDots className=" inline-block bg-gray-200  text-[22px] float-right rounded-full px-1" /></button>
          <button className="ml-2 float-right" ><BsPlus className=" inline-block bg-gray-200 text-[22px] float-right rounded-full" /></button>
          {props.onTab.map((obj)=>(
              <TaskCard 
              onTabHead={obj.tabHead}
              onTabPara={obj.tabPara}
              onTabAuthor ={obj.tabAuthor}
              onTabAuthorColor={obj.tabAuthorColor}
              onTabAttachColor={obj.tabAttachColor}
              onTabAttach={obj.tabAttach}
              onTabFlagColor={obj.tabFlagColor}
              onTabDate ={obj.tabDate}
              key={Math.random().toString()}
              />
          ))}
          </div>
        </div>
     );
}

export default StatusComp;