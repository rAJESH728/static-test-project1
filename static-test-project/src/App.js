import "./App.css";
import SearchBar from "./components/SearchBar";
import TopBar from "./components/TopBar";
import StatusComp from "./components/StatusComp";

function App() {
  return (
    <div>
      <TopBar />
      <SearchBar />
      <StatusComp />
      <StatusComp />
      <StatusComp />
      <StatusComp />
    </div>
  );
}

export default App;
