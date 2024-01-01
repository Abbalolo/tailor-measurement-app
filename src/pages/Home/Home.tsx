import { BiPlusMedical } from "react-icons/bi"; 
import { TbShirtOff } from "react-icons/tb"; 
import { RiTShirt2Fill } from "react-icons/ri"; 
import { RiTShirt2Line } from "react-icons/ri"; 
import History from "../../components/histories/History";
import Search from "../../components/search.tsx/Search";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="mx-5 ">
      <Search />
      <div className="gtid-container grid grid-cols-2 gap-2">
        <div className="dashboard  text-white flex flex-col justify-center items-center h-28 border shadow-lg rounded-md ">
          <div>
            <RiTShirt2Line className="text-black text-[50px]" />
          </div>
          <p className="text-black text-[14px]">All Cloth Mesurement</p>
        </div>
        <div className="dashboard  bg-green-500 text-white flex flex-col justify-center items-center h-28border shadow-lg rounded-md">
          <div>
            <RiTShirt2Fill className=" text-[50px] " />
          </div>
          <p className="text-white text-[14px]">Ready Mesurement</p>
        </div>
        <div className="dashboard  bg-[#FF6E5F] text-white flex flex-col justify-center items-center h-28 border shadow-lg rounded-md">
          <div>
            <TbShirtOff className=" text-[50px]" />
          </div>
          <p className="text-white text-[14px]">Deleted Mesurement</p>
        </div>
        <Link to="/addform" className="dashboard  bg-[#6700FF] text-white flex flex-col justify-center items-center h-28 border shadow-lg rounded-md ">
            <div>
              <BiPlusMedical className=" text-[50px] " />
            </div>
            <p className="text-white text-[14px]">Add New MesureMent</p>
          
        </Link>
      </div>

      <History />
    </div>
  );
}

export default Home