import React from "react";
import editBtn from "../assets/images/ic_round-edit.png";
import deleteBtn from "../assets/images/mdi_delete.png";

export default function CTtable() {
  return (
    <table id="CT">
      <THead />
      <TBody>
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
        <TRs />
      </TBody>
    </table>
  );
}

const thClass = "p-2 border-r-2 border-white w-full";
const headers = [
  "ID",
  "Resp_ID",
  "Q1",
  "Q2",
  "Q3",
  "Q4",
  "Q5",
  "Q6_1",
  "Q6_2",
  "Q6_3",
  "Q7",
];

const data = [
  "01",
  "NNDS001",
  "Venkatsubramanian R",
  "Managing Director",
  "Male",
  "BTech",
  "02/06/1969",
  "01/02/2018",
  "01/02/2018",
  "01",
  "NNDS001",
];

function THead() {
  return (
    <thead>
      <tr className="dk h1 border-b-2 border-white">
        <th colSpan="12">
          Q6.Which of the following documents are available with you for the
          purchase?
        </th>
      </tr>
      <tr className="dk h2">
        {headers.map((header, index) => (
          <th key={index}>
            <div className={thClass}>{header}</div>
          </th>
        ))}
        <th>
          <div className="p-2 w-full">Actions</div>
        </th>
      </tr>
    </thead>
  );
}

function TBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TRs() {
  return (
    <tr>
      {data.map((item, index) => (
        <td className="px-2 py-2" key={index}>
          {item}
        </td>
      ))}
      <td className="px-2 py-2">
        <div className="flex justify-center gap-1">
          <span>
            <img
              src={editBtn}
              alt="Edit Button"
              className="cursor-pointer"
              title="Edit"
            />
          </span>
          <span>
            <img
              src={deleteBtn}
              alt="Delete Button"
              className="cursor-pointer"
              title="Delete"
            />
          </span>
        </div>
      </td>
    </tr>
  );
}
