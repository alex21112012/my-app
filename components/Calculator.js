import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleDigit = (digit) => {
    setDisplay((prev) => (prev === "0" ? String(digit) : prev + digit));
  };

  const handleOperator = (op) => {
    setDisplay((prev) => prev + op);
  };

  const handleEquals = () => {
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleE = () => {
    setDisplay((prev) => (prev === "0" ? "E" : prev + "E"));
  };

  const buttons = [
    { label: "C",  action: handleClear,            cls: "btn-clear",    "data-testid": "btn-clear" },
    { label: "E",  action: handleE,                cls: "btn-e",        "data-testid": "btn-e" },
    { label: "/",  action: () => handleOperator("/"), cls: "btn-op",    "data-testid": "btn-divide" },
    { label: "*",  action: () => handleOperator("*"), cls: "btn-op",    "data-testid": "btn-multiply" },
    { label: "7",  action: () => handleDigit("7"),  cls: "btn-digit",   "data-testid": "btn-7" },
    { label: "8",  action: () => handleDigit("8"),  cls: "btn-digit",   "data-testid": "btn-8" },
    { label: "9",  action: () => handleDigit("9"),  cls: "btn-digit",   "data-testid": "btn-9" },
    { label: "-",  action: () => handleOperator("-"), cls: "btn-op",    "data-testid": "btn-subtract" },
    { label: "4",  action: () => handleDigit("4"),  cls: "btn-digit",   "data-testid": "btn-4" },
    { label: "5",  action: () => handleDigit("5"),  cls: "btn-digit",   "data-testid": "btn-5" },
    { label: "6",  action: () => handleDigit("6"),  cls: "btn-digit",   "data-testid": "btn-6" },
    { label: "+",  action: () => handleOperator("+"), cls: "btn-op",    "data-testid": "btn-add" },
    { label: "1",  action: () => handleDigit("1"),  cls: "btn-digit",   "data-testid": "btn-1" },
    { label: "2",  action: () => handleDigit("2"),  cls: "btn-digit",   "data-testid": "btn-2" },
    { label: "3",  action: () => handleDigit("3"),  cls: "btn-digit",   "data-testid": "btn-3" },
    { label: "=",  action: handleEquals,            cls: "btn-equals",  "data-testid": "btn-equals" },
    { label: "0",  action: () => handleDigit("0"),  cls: "btn-digit btn-zero", "data-testid": "btn-0" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Bebas+Neue&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #1a1a1a;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Share Tech Mono', monospace;
        }

        .calc-shell {
          background: linear-gradient(160deg, #2e2e2e 0%, #1c1c1c 100%);
          border: 2px solid #444;
          border-radius: 4px;
          padding: 28px 24px 24px;
          width: 320px;
          box-shadow:
            0 0 0 1px #111,
            8px 8px 0 #111,
            0 20px 60px rgba(0,0,0,0.7);
          position: relative;
        }

        .calc-shell::before {
          content: "CALC-9000";
          position: absolute;
          top: 10px;
          left: 24px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 11px;
          letter-spacing: 3px;
          color: #555;
        }

        .calc-shell::after {
          content: "";
          position: absolute;
          top: 10px;
          right: 24px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e05c3a;
          box-shadow: 0 0 6px #e05c3a;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .display-wrap {
          background: #0d0d0d;
          border: 1px solid #333;
          border-radius: 2px;
          padding: 12px 16px;
          margin: 24px 0 20px;
          position: relative;
          overflow: hidden;
        }

        .display-wrap::before {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.015) 2px,
            rgba(255,255,255,0.015) 4px
          );
          pointer-events: none;
        }

        .display {
          font-family: 'Share Tech Mono', monospace;
          font-size: 28px;
          color: #e8f261;
          text-align: right;
          background: transparent;
          border: none;
          width: 100%;
          outline: none;
          letter-spacing: 2px;
          text-shadow: 0 0 10px rgba(232,242,97,0.5);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .btn-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        button {
          font-family: 'Share Tech Mono', monospace;
          font-size: 18px;
          border: 1px solid #444;
          border-radius: 2px;
          padding: 16px 0;
          cursor: pointer;
          transition: all 0.08s ease;
          position: relative;
          letter-spacing: 1px;
        }

        button:active {
          transform: translateY(2px);
        }

        .btn-digit {
          background: #2a2a2a;
          color: #d0d0d0;
          border-color: #3a3a3a;
          box-shadow: 0 3px 0 #111;
        }

        .btn-digit:hover {
          background: #333;
          color: #fff;
        }

        .btn-digit:active {
          box-shadow: 0 1px 0 #111;
        }

        .btn-op {
          background: #1e2a1e;
          color: #6fcf6f;
          border-color: #2a3f2a;
          box-shadow: 0 3px 0 #0a110a;
        }

        .btn-op:hover {
          background: #243024;
          color: #8fff8f;
        }

        .btn-op:active {
          box-shadow: 0 1px 0 #0a110a;
        }

        .btn-clear {
          background: #2a1010;
          color: #e05c3a;
          border-color: #3f1a1a;
          box-shadow: 0 3px 0 #100505;
        }

        .btn-clear:hover {
          background: #341414;
          color: #ff6b47;
        }

        .btn-e {
          background: #1a1a2e;
          color: #6fb4e0;
          border-color: #252545;
          box-shadow: 0 3px 0 #090913;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .btn-e:hover {
          background: #222240;
          color: #8fd0ff;
        }

        .btn-equals {
          background: #e05c3a;
          color: #fff;
          border-color: #c04828;
          box-shadow: 0 3px 0 #601e0e;
          font-size: 22px;
          grid-row: span 2;
        }

        .btn-equals:hover {
          background: #f06040;
        }

        .btn-equals:active {
          box-shadow: 0 1px 0 #601e0e;
        }

        .btn-zero {
          grid-column: span 2;
        }
      `}</style>

      <div className="calc-shell">
        <div className="display-wrap">
          <input
            className="display"
            type="text"
            readOnly
            value={display}
            data-testid="display"
          />
        </div>

        <div className="btn-grid">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              className={btn.cls}
              onClick={btn.action}
              data-testid={btn["data-testid"]}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
