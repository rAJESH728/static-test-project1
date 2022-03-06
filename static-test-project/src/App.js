import "./App.css";
import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";
import StatusComp from "./components/StatusComp";
const dataArr = [
  {
    title : "To do",
    count : "3",
    tab : [{
      tabHead : "Mobile Wireframes",
      tabPara : "",
      tabAuthor : "VIVERRA DIAM",
      tabAuthorColor : 'text-green-500 bg-green-100' ,
      tabAttachColor : "text-gray-500",
      tabAttach : "3",
      tabFlagColor : 'text-red-500' ,
      tabDate : "Apr 12"
    },
    {
      tabHead : "User Research",
      tabPara : "Some methods may be better than others, depending on time constraints, system maturity,type of product...",
      tabAuthor : "MAECENAS LACUS",
      tabAuthorColor : 'text-blue-500 bg-blue-100' ,
      tabAttachColor : "text-gray-500",
      tabAttach : "1",
      tabFlagColor : 'text-green-500' ,
      tabDate : "Mar 4"
    },
    {
      tabHead : "Client Call",
      tabPara : ``,
      tabAuthor : "EGET INTEGER",
      tabAuthorColor : 'text-violet-500 bg-violet-100' ,
      tabAttachColor : "text-gray-100",
      tabAttach : "",
      tabFlagColor : 'text-green-500' ,
      tabDate : "Apr 2"
    }]
  },
  {
    title : "In progress",
    count : "2",
    tab : [{
      tabHead : "Login Flow",
      tabPara : "",
      tabAuthor : "NULLAM VELIT",
      tabAuthorColor : 'text-orange-500 bg-orange-100' ,
      tabAttachColor : "text-gray-100",
      tabAttach : "",
      tabFlagColor : 'text-orange-500' ,
      tabDate : "Apr 3"
    },
    {
      tabHead : "Forgot Password Screen",
      tabPara : "",
      tabAuthor : "NULLAM VELIT",
      tabAuthorColor : 'text-orange-500 bg-orange-100' ,
      tabAttachColor : "text-gray-100",
      tabAttach : "",
      tabFlagColor : 'text-green-500' ,
      tabDate : "Apr 6"
    }]
  },
  {
    title : "In review",
    count : "3",
    tab : [{
      tabHead : "Landing Page",
      tabPara : "",
      tabAuthor : "MAECENAS LACUS",
      tabAuthorColor : "text-blue-500 bg-blue-100" ,
      tabAttachColor : "text-gray-500",
      tabAttach : "2",
      tabFlagColor : "text-green-500" ,
      tabDate : "Mar 8"
    },
    {
      tabHead : "Annual Presentation",
      tabPara : `Regardless of who is perusing the report, what is sought is accurate information revealing an overall...`,
      tabAuthor : "MAECENAS LACUS",
      tabAuthorColor : "text-blue-500 bg-blue-100" ,
      tabAttachColor : "text-gray-100",
      tabAttach : "",
      tabFlagColor : "text-green-500" ,
      tabDate : "Mar 15"
    },
    {
      tabHead : "Icons",
      tabPara : ``,
      tabAuthor : "EGET INTEGER",
      tabAuthorColor : "text-violet-500 bg-violet-100" ,
      tabAttachColor : "text-gray-100",
      tabAttach : "",
      tabFlagColor : "text-orange-500" ,
      tabDate : "Apr 10"
    }]
  },
  {
    title : "Done",
    count : "3",
    tab : [{
      tabHead : "Product Mockups",
      tabPara : "",
      tabAuthor : "VIVERRA DIAM",
      tabAuthorColor : "text-green-500  bg-green-100" ,
      tabAttachColor : "text-gray-100",
      tabAttach : "",
      tabFlagColor : "text-green-500" ,
      tabDate : "Mar 2"
    },
    {
      tabHead : "Workshop Ideas",
      tabPara : ``,
      tabAuthor : "NULLAM VELIT",
      tabAuthorColor : "text-orange-500 bg-orange-100" ,
      tabAttachColor : "text-gray-100",
      tabAttach : "",
      tabFlagColor : "text-orange-500" ,
      tabDate : "Mar 4"
    },
    {
      tabHead : "Navigation",
      tabPara : ``,
      tabAuthor : "MAECENAS LACUS",
      tabAuthorColor : "text-blue-500 bg-blue-100" ,
      tabAttachColor : "text-gray-100",
      tabAttach : "",
      tabFlagColor : "text-red-500" ,
      tabDate : "Mar 15"
    }]
  }
  
];
function App() {
  return (
    <div>
      <TopBar />
      <SearchBar />
      {dataArr.map((obj)=>(
        <StatusComp
        onTitle={obj.title}
        onCount={obj.count}
        onTab={obj.tab}
        key={Math.random().toString()}
        />
      ))}
    </div>
  );
}

export default App;
