import { GrSearch } from "react-icons/gr"; 


function Search() {
  return (
    <div className="flex justify-between mb-5">
      <span className="text-gray-600 text-[14px]">Toptal 1234</span>
      <button>
        <GrSearch className="" />
      </button>
    </div>
  );
}

export default Search