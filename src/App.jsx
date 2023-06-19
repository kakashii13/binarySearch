import { useState } from "react";
import "./App.css";
import { binarySearch } from "./service/getTarget";

function App() {
  const arr = [1, 2, 4, 56, 76, 567, 890];
  const [binaryArr, setBinaryArr] = useState(arr);
  const left = 0;
  const right = arr.length - 1;
  const center = Math.floor(left + (right - left) / 2);
  const target = 2;
  const result = binarySearch(arr, target, setBinaryArr);
  return (
    <div className="container">
      <p>Target: {target}</p>
      <div className="arrContainer">
        {binaryArr.map((n) => (
          <div key={n}>
            <div className={`num ${arr[result] == n && "numKey"}`}>{n}</div>
            {n == arr[center] && <p>center</p>}
            {n == arr[left] && <p>left</p>}
            {n == arr[right] && <p>right</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
