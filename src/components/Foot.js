import React, { useState } from "react";

export default function FooterGroup(props) {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  function datas(params) {
    props.data(count);
  }

  datas();

  return (
    <>
      <div className="sticky bottom-0">
        <div className="flex justify-center items-center absolute bottom-0 ml-4 sm:ml-60">
          <div className="flex justify-start py-2 px-4 mr-4 sm:mr-64">
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={props.hide}
            >
              Back
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              onClick={decrement}
            >
              -
            </button>
            <h1 className="bg-gray-300 text-gray-800 font-bold py-2 px-4">{count}</h1>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              onClick={increment}
            >
              +
            </button>
          </div>
          <div className="flex justify-end py-2 px-4 ml-4 sm:ml-64">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={props.show}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
