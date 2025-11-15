import { useState } from "react";

const RadixCounter = () => {
  const [value, setValue] = useState(0);

  const minusClicked = () => {
    if (value <= 0) {
      setValue(4095);
    } else {
      setValue((p) => p - 1);
    }
  };

  const resetClicked = () => {
    setValue(0);
  };

  const plusClicked = () => {
    if (value >= 4095) {
      setValue(0);
    } else {
      setValue((x) => x + 1);
    }
  };

  return (
    <div
      className="border border-black border-2 m-auto p-3 rounded-4 mt-3"
      style={{ width: "fit-content" }}
    >
      <h1 className="fw-bold text-center">RADIX COUNTER</h1>

      <div className="d-flex flex-wrap justify-content-between text-center gap-4 mt-4">
        <div>
          <div className="fs-5 fw-bold">[HEX]</div>
          <div className="fs-5 font-monospace">
            {value.toString(16).toUpperCase().padStart(3, "0")}
          </div>
        </div>
        <div>
          <div className="fs-5 fw-bold">[DEC]</div>
          <div className="fs-5 fw-bold font-monospace text-primary">
            {value.toString().padStart(4, "0")}
          </div>
        </div>
        <div>
          <div className="fs-5 fw-bold">[OCT]</div>
          <div className="fs-5 font-monospace">
            {value.toString(8).padStart(4, "0")}
          </div>
        </div>
        <div>
          <div className="fs-5 fw-bold">[BIN]</div>
          <div className="fs-5 font-monospace">
            {value.toString(2).padStart(12, "0")}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around mt-3">
        <button className="btn btn-danger px-4" onClick={minusClicked}>
          &minus;
        </button>
        <button className="btn btn-secondary px-4" onClick={resetClicked}>
          RESET
        </button>
        <button className="btn btn-success px-4" onClick={plusClicked}>
          +
        </button>
      </div>
    </div>
  );
};

export default RadixCounter;