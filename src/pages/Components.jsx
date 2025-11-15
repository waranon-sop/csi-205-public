import { useState } from "react";
import RadixCounter from "../components/RadixCounter";
import Value from "../components/Value";
import Adder from "../components/Adder";
import Temperature from "../components/Temperature";
import Timer from "../components/Timer";

const Components = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="d-flex align-items-center justify-content-center p-4 h-100 ">
      <div className="container p-5 rounded-4 shadow-lg bg-white border border-secondary border-1">
        <h2 className="text-center mb-4 fw-bold text-dark ">COMPONENT PAGE</h2>
        <RadixCounter />
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <Value name={"COUNTER"} value={counter} setValue={setCounter} />
          <Adder />
          <Timer />
          <Temperature name={"TEMPERATURE"} />
        </div>
      </div>
    </div>
  );
};

export default Components;
