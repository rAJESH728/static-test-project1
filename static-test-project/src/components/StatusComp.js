import { BsThreeDots, BsPlus } from "react-icons/bs";
import SmallComp from "./SmallComp";

function StatusComp(props) {
    return ( 
        <div className="inline-block ml-3 w-80">
        <div className="align-top inline-block bg-zinc-100 box-border h-auto rounded-md w-90 px-1 pt-4 border-0 ">
          <h1 className="inline-block px-2" >{props.onTitle}</h1>
          <h1 className="inline-block bg-gray-200 w-6 h-6 pl-2 ml-2 rounded-full" >{props.onCount}</h1>
          <button className="ml-2 float-right" ><BsThreeDots className=" inline-block bg-gray-200 w-6 h-6 float-right rounded-full px-1" /></button>
          <button className="ml-2 float-right" ><BsPlus className=" inline-block bg-gray-200 w-6 h-6 float-right rounded-full" /></button>
          {props.onTab.map((obj)=>(
              <SmallComp 
              onTabHead={obj.TabHead}
              onTabPara={obj.TabPara}
              onTabAuthor ={obj.TabAuthor}
              onTabAuthorColor={obj.TabAuthorColor}
              onTabAttachColor={obj.TabAttachColor}
              onTabAttach={obj.TabAttach}
              onTabFlagColor={obj.TabFlagColor}
              onTabDate ={obj.TabDate}
              />
          ))}
          </div>
        </div>
     );
}

export default StatusComp;