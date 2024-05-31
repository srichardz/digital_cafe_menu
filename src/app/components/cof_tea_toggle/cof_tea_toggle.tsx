import React from 'react';
import styles from "./cof_tea_toggle.module.css";


const CofTeaToggle = (cl:any) => {
    return (
        <div className={styles.toggler}>
            <button onClick={cl} className={[styles.l, styles.l_1].join(" ")}>Coffees</button>
            <button onClick={cl} className={[styles.l, styles.l_2].join(" ")}>Teas</button>
        </div>
    )
}

export default CofTeaToggle