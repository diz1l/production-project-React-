import { useState } from "react";
import classes from "./Counter.module.scss";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.counter}>
      <h1 className={classes.name}>Counter</h1>
      <button className={classes.increment} onClick={() => setCount(count + 1)}>
        +
      </button>
      <h1 className={classes.number}>{count}</h1>
      <button className={classes.decrement} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}
