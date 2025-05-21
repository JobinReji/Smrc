import male from "../assets/images/male.png";
import male_selected from "../assets/images/male_sel.png";
import female from "../assets/images/female.png";
import female_selected from "../assets/images/female_sel.png";

export default function GenderSelection({ onChange, selected }) {
  return (
    <div className="w-[50%] flex gap-5 justify-center">
      <div className="cursor-pointer">
        <input
          type="radio"
          name="question_2"
          value="1"
          checked={selected === "1"}
          id="male"
          onChange={onChange}
          className="hidden"
        />
        <label
          htmlFor="male"
          className="inline-block"
          onClick={() =>
            onChange({ target: { name: "question_2", value: "1" } })
          }
        >
          <img
            className="cursor-pointer"
            src={selected === "1" ? male_selected : male}
            alt="Male"
          />
        </label>
      </div>
      <div className="cursor-pointer">
        <input
          type="radio"
          name="question_2"
          value="2"
          checked={selected === "2"}
          id="female"
          onChange={onChange}
          className="hidden"
        />
        <label
          htmlFor="female"
          className="inline-block"
          onClick={() =>
            onChange({ target: { name: "question_2", value: "2" } })
          }
        >
          <img
            className="cursor-pointer"
            src={selected === "2" ? female_selected : female}
            alt="Female"
          />
        </label>
      </div>
    </div>
  );
}
