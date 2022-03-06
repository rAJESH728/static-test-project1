import "./App.css";
import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";
import StatusComp from "./components/StatusComp";
const dataArr = [
  {
    Title : "To do",
    Count : "3",
    Tab : [{
      TabHead : "Mobile Wireframes",
      TabPara : "",
      TabAuthor : "VIVERRA DIAM",
      TabAuthorColor : {"color" :"green"} ,
      TabAttachColor : "text-gray-500",
      TabAttach : "3",
      TabFlagColor : "red" ,
      TabDate : "Apr 12"
    },
    {
      TabHead : "User Research",
      TabPara : "Some methods may be better than others, depending on time constraints, system maturity,type of product...",
      TabAuthor : "MAECENAS LACUS",
      TabAuthorColor : "blue" ,
      TabAttachColor : "text-gray-500",
      TabAttach : "1",
      TabFlagColor : "green" ,
      TabDate : "Mar 4"
    },
    {
      TabHead : "Client Call",
      TabPara : ``,
      TabAuthor : "EGET INTEGER",
      TabAuthorColor : "violet" ,
      TabAttachColor : "text-gray-100",
      TabAttach : "",
      TabFlagColor : "green" ,
      TabDate : "Apr 2"
    }]
  },
  {
    Title : "In progress",
    Count : "2",
    Tab : [{
      TabHead : "Login Flow",
      TabPara : "",
      TabAuthor : "NULLAM VELIT",
      TabAuthorColor : "orange" ,
      TabAttachColor : "text-gray-100",
      TabAttach : "",
      TabFlagColor : "orange" ,
      TabDate : "Apr 3"
    },
    {
      TabHead : "Forgot Password Screen",
      TabPara : "",
      TabAuthor : "NULLAM VELIT",
      TabAuthorColor : "orange" ,
      TabAttachColor : "text-gray-100",
      TabAttach : "",
      TabFlagColor : "green" ,
      TabDate : "Apr 6"
    }]
  },
  {
    Title : "In review",
    Count : "3",
    Tab : [{
      TabHead : "Landing Page",
      TabPara : "",
      TabAuthor : "MAECENAS LACUS",
      TabAuthorColor : "blue" ,
      TabAttachColor : "text-gray-500",
      TabAttach : "2",
      TabFlagColor : "green" ,
      TabDate : "Mar 8"
    },
    {
      TabHead : "Annual Presentation",
      TabPara : `Regardless of who is perusing the report, what is sought is accurate information revealing an overall...`,
      TabAuthor : "MAECENAS LACUS",
      TabAuthorColor : "blue" ,
      TabAttachColor : "text-gray-100",
      TabAttach : "",
      TabFlagColor : "green" ,
      TabDate : "Mar 15"
    },
    {
      TabHead : "Icons",
      TabPara : ``,
      TabAuthor : "EGET INTEGER",
      TabAuthorColor : "violet" ,
      TabAttachColor : "text-gray-100",
      TabAttach : "",
      TabFlagColor : "orange" ,
      TabDate : "Apr 10"
    }]
  },
  {
    Title : "Done",
    Count : "3",
    Tab : [{
      TabHead : "Product Mockups",
      TabPara : "",
      TabAuthor : "VIVERRA DIAM",
      TabAuthorColor : "green" ,
      TabAttachColor : "text-gray-100",
      TabAttach : "",
      TabFlagColor : "green" ,
      TabDate : "Mar 2"
    },
    {
      TabHead : "Workshop Ideas",
      TabPara : ``,
      TabAuthor : "NULLAM VELIT",
      TabAuthorColor : "orange" ,
      TabAttachColor : "text-gray-100",
      TabAttach : "",
      TabFlagColor : "orange" ,
      TabDate : "Mar 4"
    },
    {
      TabHead : "Navigation",
      TabPara : ``,
      TabAuthor : "MAECENAS LACUS",
      TabAuthorColor : "blue" ,
      TabAttachColor : "text-gray-100",
      TabAttach : "",
      TabFlagColor : "red" ,
      TabDate : "Mar 15"
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
        onTitle={obj.Title}
        onCount={obj.Count}
        onTab={obj.Tab}
        />
      ))}
    </div>
  );
}

export default App;
