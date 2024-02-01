import * as React from "react";
import { StudentDetail } from "@/components/swr";

export default function SWRPage() {
  const [detailList, setDetailList] = React.useState([1, 1, 1]);

  function handleAddClick() {
    setDetailList((prevList) => [...prevList, 1]);
  }

  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleAddClick}>Add detail</button>

      <ul>
        {detailList.map((x, index) => (
          <li key={index}>
            <StudentDetail studentId='aqbbx1vj1lqrtv3y0' />
          </li>
        ))}

        {/* <li>
          <StudentDetail studentId='aqbbx1vj1lqrtv3y0' />
        </li>
        <li>
          <StudentDetail studentId='aqbbx1vj1lqrtv3y0' />
        </li>
        <li>
          <StudentDetail studentId='aqbbx1vj1lqrtv3y0' />
        </li> */}
      </ul>
    </div>
  );
}
