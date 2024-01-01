import { useParams } from "react-router";
import { useDataContext } from "../context/Data";
import { Link } from "react-router-dom";

function HistoryDetails() {
  const { items} = useDataContext();
  const { historyId } = useParams();
  const history = items.find((item) => item.id = historyId);
  console.log(history)

  if (!history) {
    // Handle the case where history is not found
    return <div>History not found</div>;
  }

  const { fullName, date, shoulder, neck, sleeve, shirtLength, lap, trouser } = history;
  
//   const moveToBin = () => {
// removeItem(history);
//   }

  return (
    <div className=" px-5">
      <button className="rounded-sm p-1 border-none bg-red-400 hover:bg-red-300 text-white text-center text-[10px] absolute right-5 top-14 z-10">
        Delete Measure
      </button>

      <form
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   handleUpdate();
        // }}
        className="border mt-5 "
      >
        <div className="flex justify-between items-center w-full ">
          <h3>{fullName}</h3>
          <span className="text-[12px] text-gray-500">{date}</span>
        </div>
        {/* <table>
          <th className="border p-2 ">
            <h3>Measurement Name</h3>
          </th>
          <th className="border p-2 ">
            <h3>Measurement List</h3>
          </th>
          <td>12</td>
        </table> */}
        <div className="flex justify-between items-center w-full">
          <span>shoulder:</span>
          <input
            className="w-[20px] text-center"
            type="number"
            value={shoulder}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Neck:</span>
          <input className="w-[20px] text-center" type="number" value={neck} />
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Sleeve:</span>
          <input
            className="w-[20px] text-center"
            type="number"
            value={sleeve}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Shirt Length:</span>
          <input
            className="w-[20px] text-center"
            type="number"
            value={shirtLength}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Shirt Length:</span>
          <input
            className="w-[20px] text-center"
            type="number"
            value={shirtLength}
          />
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Laps:</span>
          <input className="w-[20px] text-center" type="number" value={lap} />
        </div>
        <div className="flex justify-between items-center w-full">
          <span>Traouser:</span>
          <input
            className="w-[20px] text-center"
            type="number"
            value={trouser}
          />
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full rounded-sm p-2 border-none bg-teal-700 hover:bg-teal-600 text-white"
          >
            Save Measure
          </button>
          <Link
            to="/"
            className="w-full rounded-sm p-2 border-none bg-red-400 hover:bg-red-300 text-white text-center"
          >
            Discard measure
          </Link>
        </div>
      </form>
    </div>
  );
}

export default HistoryDetails;
