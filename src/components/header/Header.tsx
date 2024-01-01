import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai"; 
import { CgMenuRightAlt } from "react-icons/cg"; 
import { Link } from "react-router-dom"
import Modal from "../Modal/Modal";



function Header() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <header className="flex justify-between items-center w-full p-5">
      <Link className="text-[18px] font-bold" to="/">
        Mea1sure
      </Link>
      <nav
        className={
          toggle
            ? "absolute right-0 top-0 bg-white shadow-lg w-full h-[50%] transition-all duration-500 translate-y-0 z-50"
            : "absolute right-0 top-0 bg-white shadow-lg w-full h-[50%] transition-all duration-500 -translate-y-96 z-50"
        }
      >
        <button>
          <AiOutlineCloseSquare
            onClick={() => setToggle(!toggle)}
            className="text-black text-[20px] absolute right-5 top-5"
          />
        </button>

        <ul className="flex justify-center items-center  gap-2  flex-col p-5">
          <li>
            <Link onClick={() => setToggle(!toggle)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(!toggle)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(!toggle)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(!toggle)} to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <button>
        <CgMenuRightAlt
          onClick={() => setToggle(!toggle)}
          className="text-[20px]"
        />
      </button>
      {toggle ? <Modal /> : null}
    </header>
  );
}

export default Header