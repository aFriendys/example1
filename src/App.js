import React from "react";
import "./styles.css";

export default function App() {
  let error = document.createElement("div");
  error.className = "alert";
  error.innerHTML = "Something went wrong";

  const handler = (e) => {
    if (e.target.value.startsWith("=") && e.key === "Enter") {
      let v = e.target.value.slice(1);

      if (v.toLowerCase().startsWith("sum")) {
        v = v.slice(4, v.length - 1);
        let c = v.split(",");
        let s = 0;
        for (let i in c) {
          s += parseInt(document.getElementById(c[i].trim()).value);
        }

        v = "" + s;
      }

      if (v.toLowerCase().startsWith("avg")) {
        v = v.slice(4, v.length - 1);
        let c = v.split(",");

        let s = 0;
        let n = 0;
        for (let i in c) {
          n += 1;
          s += parseInt(document.getElementById(c[i].trim()).value);
        }

        v = "" + s / n;
      }

      try {
        e.target.value = eval(v);
      } catch (e) {
        document.body.append(error);
      }
    }
  };

  let inputs = [];

  for (let i = 0; i < 104; i++) {
    inputs.push(
      <div key={i} className={"cell"}>
        <input id={i} onKeyUp={handler} />
      </div>
    );
  }

  return <div className={"table"}>{inputs}</div>;
}

// ReactDOM.render(<App />, document.querySelector("#app"))
