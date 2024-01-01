import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FormInput from "../../../components/form/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useDataContext } from "../../../components/context/Data";
import { v4 as uuidv4 } from "uuid";

interface Input {
  id: number;
  name: string;
  type: string;
  label: string;
  required: string;
}

function AddCapForm() {
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const { capItems, addCapItem } = useDataContext();
  const [idCounter, setIdCounter] = useState(1);
  const navigate = useNavigate();

  const inputs: Input[] = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      label: "Full Name:",
      required: "required",
    },
    {
      id: 2,
      name: "length",
      type: "number",
      label: "Length:",
      required: "required",
    },
    {
      id: 3,
      name: "width",
      type: "number",
      label: "Width:",
      required: "required",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newMeasureData = {
      id: uuidv4(), // Invoke uuidv4 to generate a new UUID
      date: new Date().toLocaleDateString(),
      fullName: capitaliseFirstLetter(values["fullName"] || ""),
      length: parseInt(values["length"]) || 0,
      width: parseInt(values["width"]) || 0,
    };

    addCapItem(newMeasureData);
    setValues({});
    setIdCounter(idCounter + 1);
    navigate("/");
  };

 function capitaliseFirstLetter(str: string) {
   const words: string[] = str.split(" ").map((word) => {
     return word.charAt(0).toUpperCase() + word.slice(1);
   });
   const capitalizedString: string = words.join(" ");
   return capitalizedString;
 }


  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(capItems);
  }, [capItems]);

  return (
    <div className="p-5">
      <h1 className="text-center text-[18px] font-bold mb-5">
        Add Measurement
      </h1>
      <div className="text-[10px] flex justify-end items-center gap-2">
        <Link className="border p-1 " to="/addform">
          Cloth Measure
        </Link>
        <Link className="border p-1 bg-teal-600  text-white " to="/addcapform">
          Cap Measure
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name] || ""}
              onChange={onChange}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <button
            type="submit"
            className="w-full rounded-sm p-2 border-none bg-teal-700 hover:bg-teal-600 text-white"
          >
            Add Measure
          </button>
          <Link
            to="/"
            type="submit"
            className="w-full rounded-sm p-2 border-none bg-red-400 hover:bg-red-300 text-white text-center"
          >
            Discard measure
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddCapForm;
