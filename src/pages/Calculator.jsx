import { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Calculator = () => {
  const [screen, setScreen] = useState("0");
  const [operator, setOperator] = useState("?");
  const [appState, setAppState] = useState("S0");
  const [number1, setNumber1] = useState(0);
  const [memory, setMemory] = useState(0);
  const [lastAction, setLastAction] = useState(null);

  const formatScreen = (value) => {
    const str = value.toString();
    if (str === "Error") return str;
    if (str.length > 9) {
      const num = parseFloat(str);
      if (Math.abs(num) >= 1e9 || (Math.abs(num) < 1e-4 && num !== 0)) {
        return num.toExponential(2);
      }
      return num.toPrecision(9);
    }
    return str;
  };

  const numberClicked = useCallback(
    (number) => {
      if (screen === "Error") {
        setScreen(number.toString());
        setAppState("S1");
        setLastAction(null);
        return;
      }

      if (lastAction === "equals") {
        setScreen(number.toString());
        setAppState("S1");
        setLastAction(null);
        return;
      }

      if (appState === "S0") {
        setScreen(number.toString());
        setAppState("S1");
      } else if (appState === "S1") {
        setScreen((prevScreen) => {
          if (prevScreen.length < 9) {
            return prevScreen === "0"
              ? number.toString()
              : prevScreen + number.toString();
          }
          return prevScreen;
        });
      } else if (appState === "S2") {
        setScreen(number.toString());
        setAppState("S3");
      } else if (appState === "S3") {
        setScreen((prevScreen) => {
          if (prevScreen.length < 9) {
            return prevScreen + number.toString();
          }
          return prevScreen;
        });
      }
    },
    [appState, screen, lastAction]
  );

  const operatorClicked = useCallback(
    (_operator) => {
      if (screen === "Error") return;

      if (appState === "S3") {
        const number2 = Number(screen);
        let result = 0;

        if (operator === "+") {
          result = number1 + number2;
        } else if (operator === "-") {
          result = number1 - number2;
        } else if (operator === "*") {
          result = number1 * number2;
        } else if (operator === "/") {
          if (number2 === 0) {
            setScreen("Error");
            setOperator("?");
            setAppState("S0");
            setNumber1(0);
            return;
          }
          result = number1 / number2;
        }

        result = parseFloat(result.toFixed(10));
        setScreen(formatScreen(result));
        setNumber1(result);
        setOperator(_operator);
        setAppState("S2");
      } else if (appState === "S1") {
        setNumber1(Number(screen));
        setOperator(_operator);
        setAppState("S2");
      }

      setLastAction(null);
    },
    [appState, screen, operator, number1]
  );

  const equalClicked = useCallback(() => {
    if (screen === "Error") return;

    const number2 = Number(screen);
    let result = 0;

    if (operator === "+") {
      result = number1 + number2;
    } else if (operator === "-") {
      result = number1 - number2;
    } else if (operator === "*") {
      result = number1 * number2;
    } else if (operator === "/") {
      if (number2 === 0) {
        setScreen("Error");
        setOperator("?");
        setAppState("S0");
        setNumber1(0);
        setLastAction("equals");
        return;
      }
      result = number1 / number2;
    } else {
      result = Number(screen);
    }

    result = parseFloat(result.toFixed(10));
    setScreen(formatScreen(result));
    setNumber1(result);
    setOperator("?");
    setAppState("S1");
    setLastAction("equals");
  }, [operator, number1, screen]);

  const ceClicked = useCallback(() => {
    setScreen("0");
    setOperator("?");
    setAppState("S0");
    setNumber1(0);
    setLastAction(null);
  }, []);

  const decimalClicked = useCallback(() => {
    if (screen === "Error") return;

    if (lastAction === "equals") {
      setScreen("0.");
      setAppState("S1");
      setLastAction(null);
      return;
    }

    if (appState === "S0" || appState === "S2") {
      setScreen("0.");
      setAppState(appState === "S0" ? "S1" : "S3");
    } else if (
      (appState === "S1" || appState === "S3") &&
      !screen.includes(".")
    ) {
      setScreen(screen + ".");
    }
  }, [appState, screen, lastAction]);

  const toggleSignClicked = useCallback(() => {
    if (screen === "Error") return;

    if (appState === "S1" || appState === "S3") {
      const num = Number(screen);
      setScreen((num * -1).toString());
    }
  }, [appState, screen]);

  const percentClicked = useCallback(() => {
    if (screen === "Error") return;

    if (appState === "S1" || appState === "S3") {
      const num = Number(screen) / 100;
      setScreen(formatScreen(num));
    }
  }, [appState, screen]);

  const sqrtClicked = useCallback(() => {
    if (screen === "Error") return;

    if (appState === "S1" || appState === "S3") {
      const num = Number(screen);
      if (num < 0) {
        setScreen("Error");
        setAppState("S0");
        setOperator("?");
        setNumber1(0);
      } else {
        const result = Math.sqrt(num);
        setScreen(formatScreen(result));
      }
    }
  }, [appState, screen]);

  const reciprocalClicked = useCallback(() => {
    if (screen === "Error") return;

    if (appState === "S1" || appState === "S3") {
      const num = Number(screen);
      if (num === 0) {
        setScreen("Error");
        setAppState("S0");
        setOperator("?");
        setNumber1(0);
      } else {
        const result = 1 / num;
        setScreen(formatScreen(result));
      }
    }
  }, [appState, screen]);

  const memoryClear = useCallback(() => {
    setMemory(0);
  }, []);

  const memoryRecall = useCallback(() => {
    setScreen(formatScreen(memory));
    setAppState("S1");
    setLastAction(null);
  }, [memory]);

  const memoryAdd = useCallback(() => {
    if (screen === "Error") return;
    setMemory(memory + Number(screen));
  }, [memory, screen]);

  const memorySubtract = useCallback(() => {
    if (screen === "Error") return;
    setMemory(memory - Number(screen));
  }, [memory, screen]);

  const backspaceClicked = useCallback(() => {
    if (screen === "Error") {
      setScreen("0");
      setAppState("S0");
      return;
    }

    if (lastAction === "equals") {
      setScreen("0");
      setAppState("S0");
      setLastAction(null);
      return;
    }

    if (appState === "S1" || appState === "S3") {
      setScreen((prevScreen) => {
        if (prevScreen.length === 1 || prevScreen === "0") {
          return "0";
        }
        return prevScreen.slice(0, -1);
      });
    }
  }, [appState, screen, lastAction]);

  const checkkeyboard = useCallback(
    (event) => {
      if (event.key >= "0" && event.key <= "9") {
        numberClicked(Number(event.key));
      } else if (event.key === "+") {
        operatorClicked("+");
      } else if (event.key === "-") {
        operatorClicked("-");
      } else if (event.key === "*") {
        operatorClicked("*");
      } else if (event.key === "/") {
        event.preventDefault();
        operatorClicked("/");
      } else if (event.key === "Enter" || event.key === "=") {
        equalClicked();
      } else if (event.key === "Escape") {
        ceClicked();
      } else if (event.key === ".") {
        decimalClicked();
      } else if (event.key === "Backspace") {
        backspaceClicked();
      }
    },
    [
      numberClicked,
      operatorClicked,
      equalClicked,
      ceClicked,
      decimalClicked,
      backspaceClicked,
    ]
  );

  useEffect(() => {
    document.addEventListener("keydown", checkkeyboard);
    return () => {
      document.removeEventListener("keydown", checkkeyboard);
    };
  }, [checkkeyboard]);

  return (
    <div className="d-flex align-items-center justify-content-center p-4 h-100">
      <div className="container p-5 rounded-4 shadow-lg bg-white border border-secondary border-1">
        <h2 className="text-center mb-4 fw-bold text-dark">Calculator Page</h2>
        <div style={{ maxWidth: "450px", margin: "0 auto" }}>
          <div className="border border-secondary border-2 rounded p-3 bg-light shadow-sm">
            <div
              id="screen"
              className="alert alert-secondary text-end fs-2"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {screen}
            </div>

            <div className="row g-2">
              <div className="col">
                <button
                  className="btn btn-secondary w-100"
                  onClick={memoryClear}
                >
                  MC
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-secondary w-100"
                  onClick={memoryRecall}
                >
                  MR
                </button>
              </div>
              <div className="col">
                <button className="btn btn-secondary w-100" onClick={memoryAdd}>
                  M+
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-secondary w-100"
                  onClick={memorySubtract}
                >
                  M-
                </button>
              </div>
              <div className="col">
                <button className="btn btn-danger w-100" onClick={ceClicked}>
                  CE
                </button>
              </div>
            </div>

            <div className="row g-2 mt-2">
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(7)}
                >
                  7
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(8)}
                >
                  8
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(9)}
                >
                  9
                </button>
              </div>
              <div className="col">
                <button
                  className={`btn w-100 ${
                    operator === "/" ? "btn-warning" : "btn-success"
                  }`}
                  onClick={() => operatorClicked("/")}
                >
                  &divide;
                </button>
              </div>
              <div className="col">
                <button className="btn btn-success w-100" onClick={sqrtClicked}>
                  &radic;
                </button>
              </div>
            </div>

            <div className="row g-2 mt-2">
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(4)}
                >
                  4
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(5)}
                >
                  5
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(6)}
                >
                  6
                </button>
              </div>
              <div className="col">
                <button
                  className={`btn w-100 ${
                    operator === "*" ? "btn-warning" : "btn-success"
                  }`}
                  onClick={() => operatorClicked("*")}
                >
                  &times;
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-success w-100"
                  onClick={percentClicked}
                >
                  %
                </button>
              </div>
            </div>

            <div className="row g-2 mt-2">
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(1)}
                >
                  1
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(2)}
                >
                  2
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(3)}
                >
                  3
                </button>
              </div>
              <div className="col">
                <button
                  id="minus"
                  className={`btn w-100 ${
                    operator === "-" ? "btn-warning" : "btn-success"
                  }`}
                  onClick={() => operatorClicked("-")}
                >
                  &minus;
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-success w-100"
                  onClick={reciprocalClicked}
                >
                  1/x
                </button>
              </div>
            </div>

            <div className="row g-2 mt-2">
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => numberClicked(0)}
                >
                  0
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-success w-100"
                  onClick={decimalClicked}
                >
                  .
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-success w-100"
                  onClick={toggleSignClicked}
                >
                  +/&minus;
                </button>
              </div>
              <div className="col">
                <button
                  id="plus"
                  className={`btn w-100 ${
                    operator === "+" ? "btn-warning" : "btn-success"
                  }`}
                  onClick={() => operatorClicked("+")}
                >
                  +
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-success w-100"
                  onClick={equalClicked}
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
