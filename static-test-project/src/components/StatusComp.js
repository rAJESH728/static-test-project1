import { BsThreeDots, BsPlus } from "react-icons/bs";
import TaskCard from "./TaskCard";

function StatusComp(props) {
    return ( 
        <div className="inline-block ml-3 w-80">
        <div className="align-top inline-block bg-zinc-100 box-border h-auto rounded-md w-90 px-1 pt-4 border-0 ">
          <h1 className="inline-block px-2" >{props.onTitle}</h1>
          <h1 className="inline-block bg-gray-200 w-6 h-6 pl-2 ml-2 rounded-full" >{props.onCount}</h1>
          <button className="ml-2 float-right" ><BsThreeDots className=" inline-block bg-gray-200 w-6 h-6 float-right rounded-full px-1" /></button>
          <button className="ml-2 float-right" ><BsPlus className=" inline-block bg-gray-200 w-6 h-6 float-right rounded-full" /></button>
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