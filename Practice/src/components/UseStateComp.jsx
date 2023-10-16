import React, { useEffect } from "react";
import { useState } from "react";

function UseStateComp() {
  let [input1, setinput1] = useState(0);
  let [input2, setinput2] = useState(0);
  let [result, setresult] = useState(0);
  let [resultList, setresultList] = useState([]);

  function handleAddition(e) {
    setresult(result = input1 + input2);
    setresultList([...resultList, result]);
    console.log(result, resultList, resultList.length);
  }

//   useEffect(() => {
//     handleAddition();
//   }, [result]);

  return (
    <>
      <div className="addition_block">
        <div className="upper_block">
          <input
            type="text"
            onChange={(e) => setinput1(Number(e.target.value))}
          />
          <input
            type="text"
            onChange={(e) => setinput2(Number(e.target.value))}
          />
          <button onClick={handleAddition}>Add</button>
          <p>{result}</p>
        </div>

        <div className="lower_block">
          <h4>Result List</h4>
          <ul>
            {resultList.map((list, index) => (
              <li key={`list${index}`}>{list}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default UseStateComp;
