import { Link } from "react-router-dom";
import { useDataContext } from "../context/Data";

function History() {
  const { items } = useDataContext();

  return (
    <div className="border my-5 h-[280px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 ">
      {items.length > 0 ? (
        items?.map((item) => (
          <Link
            to={`/history/${item.id}`}
            className="flex justify-between items-center p-2 "
            key={item.id}
          >
            <h3>{item.fullName}</h3>
            <span className="text-[12px] text-gray-500">{item.date}</span>
          </Link>
        ))
      ) : (
        <div className="text-center my-5 text-gray-500 text-[20px]">
          History is Empty
        </div>
      )}
    </div>
  );
}

export default History;
