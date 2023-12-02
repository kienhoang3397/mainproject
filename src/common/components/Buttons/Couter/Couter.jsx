import React, { useState } from "react";
import styles from "./Couter.module.css";

function Couter({ value, handleCouterDecrease, handleCouterIncrease }) {
  const [couter, setCouter] = useState();

  return (
    <div className={styles.container}>
      <div className={styles.couter}>
        <button onClick={handleCouterDecrease} className={styles.btnHandle}>
          -
        </button>
        <p className={styles.content}>{value}</p>
        <button onClick={handleCouterIncrease} className={styles.btnHandle}>
          +
        </button>
      </div>
    </div>
  );
}

export default Couter;
