function TopBar() {
    return ( 
        <div className="bg-gray-100 p-1 w-full border-b-2">
        <h1 className="text-gray-700 font-medium px-6 py-3 inline-block">Product Design Team</h1>
        <div className="inline-block w-min border rounded-md text-white border--blue-700 px-3 py-0.5 text-xs bg-blue-700 t ">
          Sprint8
        </div>
        {/* <button><h1 className="inline-block py-3 text-blue-600 text-right float-right">+ New Member</h1></button> */}
      </div>
     );
}

export default TopBar;