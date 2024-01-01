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


function AddForm() {
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const { items, addItem } = useDataContext();
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
      name: "shoulder",
      type: "number",
      label: "Shoulder:",
      required: "required",
    },
    {
      id: 3,
      name: "neck",
      type: "number",
      label: "Neck:",
      required: "required",
    },
    {
      id: 4,
      name: "shirtLength",
      type: "number",
      label: "Shirt Length:",
      required: "required",
    },
    {
      id: 5,
      name: "sleeve",
      type: "number",
      label: "Sleeve:",
      required: "required",
    },
    {
      id: 6,
      name: "chest",
      type: "number",
      label: "Chest:",
      required: "required",
    },
    {
      id: 7,
      name: "lap",
      type: "number",
      label: "Laps:", // Corrected the label to "Laps"
      required: "required",
    },
    {
      id: 8,
      name: "trouser",
      type: "number",
      label: "Trouser:",
      required: "required",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMeasureData = {
      id: uuidv4,
      date: new Date().toLocaleDateString(),
      fullName: capitaliseFirstLetter(values["fullName"] || ""),
      shoulder: parseInt(values["shoulder"]) || 0,
      neck: parseInt(values["neck"]) || 0,
      sleeve: parseInt(values["sleeve"]) || 0,
      chest: parseInt(values["chest"]) || 0,
      shirtLength: parseInt(values["shirtLength"]) || 0,
      lap: parseInt(values["lap"]) || 0,
      trouser: parseInt(values["trouser"]) || 0,
    };

    addItem(newMeasureData);
    setValues({});
    setIdCounter(idCounter + 1);
    navigate("/")
   
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
    console.log(items)
  }, [items])



  return (
    <div className="p-5">
      <h1 className="text-center text-[18px] font-bold mb-5">
        Add Measurement
      </h1>
      <div className="text-[10px] flex justify-end items-center gap-2">
        <Link className="border p-1 bg-teal-600 text-white" to="/addform">
          Cloth Measure
        </Link>
        <Link className="border p-1 " to="/addcapform">
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

export default AddForm;
