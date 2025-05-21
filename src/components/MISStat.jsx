import React from "react";
import Charts from "./charts";

function MISStat() {
  return (
    <div className="p-2">
      <Charts />
      <hr className="border-[#132F62]" />
      <TableBox />
    </div>
  );
}

const records = [
  {
    Question: "Q2. Record Gender",
    TableData: [
      {
        Value: 1,
        Label: "Male",
        Count: 2,
      },
      {
        Value: 2,
        Label: "Female",
        Count: 1,
      },
    ],
  },
  {
    Question: "Q4.How did you inquire about purchasing the XL 100?",
    TableData: [
      {
        Value: 1,
        Label: "By Visiting TVS Dealership",
        Count: 2,
      },
      {
        Value: 2,
        Label: "By calling TVS dealership by phone",
        Count: 1,
      },
      {
        Value: 3,
        Label: "Visited TVS Website and registered there",
        Count: 2,
      },
      {
        Value: 4,
        Label: "Participated in near by Mela	",
        Count: 1,
      },
    ],
  },
  {
    Question: "Q5.When do you plan to make the purchase?",
    TableData: [
      {
        Value: 1,
        Label: "Within One week",
        Count: 2,
      },
      {
        Value: 2,
        Label: "Within 2-3 week",
        Count: 1,
      },
      {
        Value: 3,
        Label: "Within 1-2 Months",
        Count: 2,
      },
      {
        Value: 4,
        Label: "Within 3-6 week",
        Count: 1,
      },
      {
        Value: 5,
        Label: "Within 6-12 Months",
        Count: 2,
      },
    ],
  },
];

function TableBox() {
  return (
    <div className="h-[50%] mt-2 flex flex-row justify-between items-center">
      {records.map((record, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-[30%] p-2 rounded-lg shadow_out m-1 bg-[#d9d9d9]"
        >
          <div className="m-1">{record.Question}</div>
          <div className="m-1 overflow-auto w-[95%] h-[24vh] sm-tab">
            <table id="mis_tab" className="w-full">
              <thead>
                <tr className="border-b-2 border-[#132F62]">
                  <th scope="col">Value</th>
                  <th scope="col" className="min-w-[10vw]">
                    Label
                  </th>
                  <th scope="col">Count</th>
                </tr>
              </thead>
              <tbody className="text-black text-center">
                {record.TableData.map((row) => (
                  <tr key={row.Value}>
                    <td>{row.Value}</td>
                    <td>{row.Label}</td>
                    <td>{row.Count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MISStat;
