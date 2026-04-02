import { useState } from "react";

export default function Calculator() {
  const [calculation, setCalculation] = useState("");

  function addToCalculation(num) {
    setCalculation(calculation + num);
  }

  function clearCalculation() {
    setCalculation("");
  }

  function calculate() {
    try {
      setCalculation(String(eval(calculation)));
    } catch {
      setCalculation("Error");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <table border="1" cellPadding="10" style={{ textAlign: "center", fontSize: "24px" }}>
        <thead>
          <tr>
            <th colSpan="4">
              <input
                type="text"
                readOnly
                value={calculation}
                data-testid="display"
                style={{ width: "100%", fontSize: "24px", textAlign: "right", padding: "8px" }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button data-testid="btn-7" onClick={() => addToCalculation("7")}>7</button></td>
            <td><button data-testid="btn-8" onClick={() => addToCalculation("8")}>8</button></td>
            <td><button data-testid="btn-9" onClick={() => addToCalculation("9")}>9</button></td>
            <td><button data-testid="btn-divide" onClick={() => addToCalculation("/")}>/</button></td>
          </tr>
          <tr>
            <td><button data-testid="btn-4" onClick={() => addToCalculation("4")}>4</button></td>
            <td><button data-testid="btn-5" onClick={() => addToCalculation("5")}>5</button></td>
            <td><button data-testid="btn-6" onClick={() => addToCalculation("6")}>6</button></td>
            <td><button data-testid="btn-multiply" onClick={() => addToCalculation("*")}>*</button></td>
          </tr>
          <tr>
            <td><button data-testid="btn-1" onClick={() => addToCalculation("1")}>1</button></td>
            <td><button data-testid="btn-2" onClick={() => addToCalculation("2")}>2</button></td>
            <td><button data-testid="btn-3" onClick={() => addToCalculation("3")}>3</button></td>
            <td><button data-testid="btn-subtract" onClick={() => addToCalculation("-")}>-</button></td>
          </tr>
          <tr>
            <td><button data-testid="btn-0" onClick={() => addToCalculation("0")}>0</button></td>
            <td><button data-testid="btn-e" onClick={() => addToCalculation("E")}>E</button></td>
            <td><button data-testid="btn-equals" onClick={calculate}>=</button></td>
            <td><button data-testid="btn-add" onClick={() => addToCalculation("+")}>+</button></td>
          </tr>
          <tr>
            <td colSpan="4">
              <button data-testid="btn-clear" onClick={clearCalculation}>C</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}