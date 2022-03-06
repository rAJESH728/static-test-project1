import { BsSearch } from "react-icons/bs";
function SearchBar() {
  return (
    <div className="px-3 py-6 m-2">
      <div className="bg-zinc-100 inline-block border-solid border rounded-lg border-gray-300 focus:border-blue-600"
      >
        <BsSearch className="text-gray-500 ml-4 inline-block mx-2 mb-1" />
        <input
          className="focus:border-blue-500 text-sm bg-zinc-100 border-2 rounded px-2 border-zinc-100 focus:outline-none bg-left py-1"
          type="text"
          placeHolder="Search Items"
        />
      </div>
      <select className="ml-2 float-right  bg-gray-100 border border-gray-300 text-gray-400 px-3 py-2  text-sm rounded-lg inline-block">
        <option value="">Board</option>
      </select>
      <button className="ml-2 float-right bg-gray-100 border border-gray-300 text-gray-400 px-3 py-2 text-sm rounded-lg inline-block">
        Filter
      </button>
      <button className="float-right bg-blue-700 border border-blue-800 text-white px-3 py-2 text-sm rounded-lg inline-block">
        + New Item
      </button>
    </div>
  );
}

export default SearchBar;
