import { useState } from "react";
import GenderSelection from "./GenderSelection";

export default function Form() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: [],
    question_7: [],
    question_8: "",
    question_9: "",
    question_10: null,
  });
  const [showError, setShowError] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };
  const nextPage = (e) => {
    e.preventDefault();
    if (
      !formData.question_1 ||
      !formData.question_2 ||
      !formData.question_3 ||
      !formData.question_4 ||
      !formData.question_5
    ) {
      setShowError(true); // Show error
      setTimeout(() => setShowError(false), 3000); // Hide after 3 seconds
      return;
    } else {
      setCurrentPage(2);
    }
  };
  const prevPage = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.question_6 ||
      !formData.question_7 ||
      !formData.question_8 ||
      !formData.question_9 ||
      !formData.question_10
    ) {
      setShowError(true); // Show error
      setTimeout(() => setShowError(false), 3000); // Hide after 3 seconds
      return;
    } else {
      console.log("Form Data Submited", formData);
    }
  };
  const textTypeClass =
    "bg-transparent border-b-2 border-[#132F62] text-center w-[40%] outline-0 m-1";
  const numberTypeClass =
    "bg-transparent border-b-2 border-[#132F62] text-center w-[90%] outline-0 m-1 hide-arrow";
  const fileClass =
    "file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#132F62] hover:file:bg-violet-100 dark:file:bg-[#132F62] dark:file:text-violet-100 dark:hover:file:bg-[#132f62ed] ...";
  const selClass = "bg-[#cdcacd] text-[#132F62] rounded-lg p-2 w-full my-2";
  const secClass = "w-full text-center rounded-lg m-1 ";
  const btnClass =
    "px-16 py-1 bg-[#132F62] text-white font-semibold rounded-md shadow_out text-lg cursor-pointer hover:bg-[#132F62ed]";
  return (
    <>
      <form onSubmit={handleSubmit} className="h-full" action="">
        {currentPage === 1 && (
          <div className="h-full flex flex-col justify-evenly">
            <div className={secClass}>
              <Question text="Q1. Please provide your name" />
              <Input
                type="text"
                className={textTypeClass}
                name="question_1"
                value={formData.question_1}
                onChange={handleChange}
              />
            </div>
            <div className={secClass}>
              <Question text="Q2. Record Gender" />
              <div className="flex w-full justify-around mt-2">
                <GenderSelection
                  onChange={handleChange}
                  selected={formData.question_2}
                />
              </div>
            </div>
            <div className={secClass}>
              <Question text="Q3. Do you currently own a vehicle?" />
              <div className=" w-full flex justify-center">
                <Select
                  name="question_3"
                  value={formData.question_3}
                  onChange={handleChange}
                  className={selClass}
                >
                  <option value="">--Select--</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>
            </div>
            <div className={secClass}>
              <Question text="Q4. How did you inquire about purchasing the XL 100?" />
              <div className=" w-full flex justify-center">
                <Select
                  name="question_4"
                  value={formData.question_4}
                  onChange={handleChange}
                  className={selClass}
                >
                  <option value="">--Select--</option>
                  <option value="1">By Visiting TVS Dealership</option>
                  <option value="2">By calling TVS dealership by phone</option>
                  <option value="3">
                    Visited TVS Website and registered there
                  </option>
                  <option value="4">Participated in near by Mela</option>
                </Select>
              </div>
            </div>
            <div className={secClass}>
              <Question text="Q5. When do you plan to make the purchase?" />
              <RadioGroup
                name="question_5"
                options={[
                  { value: "1", label: "Within One week" },
                  { value: "2", label: "Within 2-3 weeks" },
                  { value: "3", label: "Within 1-2 months" },
                  { value: "4", label: "Within 3-6 months" },
                  { value: "5", label: "Within 6-12 months" },
                ]}
                selected={formData.question_5}
                onChange={handleChange}
              />
            </div>
            <div className={secClass}>
              <button className={btnClass} onClick={nextPage} type="button">
                Next
              </button>
            </div>
          </div>
        )}
        {currentPage === 2 && (
          <div className="h-full flex flex-col justify-evenly">
            <div className={secClass}>
              <Question
                text="Q6. Which of the following documents are available with you for the
                purchase?"
              />
              <CheckboxGroup
                name="question_6"
                options={[
                  "Aadhaar Card",
                  "Bank Account",
                  "Cheque Book",
                  "Own House",
                  "Salary Slips",
                  "IT Returns",
                ]}
                selected={formData.question_6}
                onChange={handleChange}
              />
            </div>
            <div className={secClass}>
              <Question text="Q7. What factors made you consider buying XL-100?" />
              <CheckboxGroup
                name="question_7"
                options={[
                  "Looks and Style",
                  "More Mileage",
                  "Multi Utility",
                  "More Power",
                  "Status Symbol",
                  "Family Use",
                ]}
                selected={formData.question_7}
                onChange={handleChange}
              />
            </div>
            <div className={secClass}>
              <Question text="Q8. Would you like to recommend to your Friends & Family?" />
              <RadioGroup
                name="question_8"
                options={[
                  { value: "1", label: "Yes" },
                  { value: "2", label: "No" },
                ]}
                selected={formData.question_8}
                onChange={handleChange}
              />
            </div>
            <div className={secClass}>
              <Question text="Q9. How much down payment can you afford?" />
              <div className="flex justify-center">
                <div className="w-[30%]">
                  <Input
                    className={numberTypeClass}
                    required
                    type="number"
                    name="question_9"
                    value={formData.question_9}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="w-full text-center rounded-lg">
              <Question text="Q10. Upload the feedback image" />
              <div className="my-2">
                <Input
                  required
                  type="file"
                  name="question_10"
                  className={fileClass}
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className={secClass}>
              <div className="flex justify-center gap-6">
                <button className={btnClass} type="button" onClick={prevPage}>
                  Back
                </button>
                <button className={btnClass} type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
      <div
        className={`p-4 bg-red-800 text-white rounded-2xl fixed right-6 bottom-8 transition-opacity duration-500 ${
          showError ? "opacity-100" : "opacity-0"
        }`}
      >
        Please fill in all required fields before proceeding!
      </div>
    </>
  );
}
function Question({ text }) {
  return (
    <div className="m-1">
      {text}
      <span className="text-red-800 text-xl"> *</span>
    </div>
  );
}
function Input({ type = "text", ...props }) {
  return <input type={type} required {...props} />;
}
function Select({ children, ...props }) {
  return (
    <div className="w-[50%]">
      <select {...props}>{children}</select>
    </div>
  );
}
function RadioGroup({ name, options, selected, onChange }) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-[70%] flex flex-wrap gap-1 text-left bg-white p-1 rounded-2xl">
        {options.map((opt) => (
          <label key={opt.value} className="w-[48%]">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selected === opt.value}
              onChange={onChange}
              className="mx-2"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}
function CheckboxGroup({ name, options, selected, onChange }) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-[70%] flex flex-wrap gap-1 text-left bg-white p-1 rounded-2xl">
        {options.map((opt, index) => (
          <label key={index} className="w-[48%]">
            <input
              type="checkbox"
              name={name}
              value={opt}
              checked={selected.includes(opt)}
              onChange={onChange}
              className="mx-2"
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
