import { useState, useEffect } from "react";
const Timer = ({ name }) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, seconds]);

  const convertToString = (seconds) => {
    const MINUTE_SECONDS = 60;
    const HOUR_SECONDS = 60 * MINUTE_SECONDS;
    const DAY_SECONDS = 24 * HOUR_SECONDS;

    const days = Math.floor(seconds / DAY_SECONDS);
    const hours = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS);
    const minutes = Math.floor((seconds % HOUR_SECONDS) / MINUTE_SECONDS);
    const secs = seconds % MINUTE_SECONDS;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${secs}s`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };
  const buttonClass = `btn ${running ? "btn-warning" : "btn-success"}`;
  const iconClass = running ? "bi bi-pause" : "bi bi-play";
  const label = running ? "Pause" : "Run";

  const runClick = () => {
    setRunning(!running);
  };

  const resetClick = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div
      className="border border-black border-2 rounded-3 mx-auto p-2 bg-secondary-subtle mt-3"
      style={{ width: "fit-content" }}
    >
      <h3 className="text-primary text-center">{name || "TIMER"}</h3>
      <input
        className="form-control text-end fs-4 fw-bold px-2 mb-2"
        style={{ width: "11.5rem" }}
        readOnly={true}
        value={convertToString(seconds)}
      />
      <div className="d-flex justify-content-between">
        <button className="btn btn-danger" onClick={resetClick}>
          <i class="bi bi-arrow-clockwise"></i>&nbsp;Reset
        </button>
        <button className={buttonClass} onClick={runClick}>
          <i className={iconClass}></i>&nbsp;{label}
        </button>
      </div>
    </div>
  );
};

export default Timer;
