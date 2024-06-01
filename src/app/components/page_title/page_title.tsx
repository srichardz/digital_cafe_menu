import React from 'react';
import styles from "./page_title.module.css";

const PgTtl = (mode:any) => {
    return (
        <div><h2 className={[styles.firstc, mode?styles.c:styles.t].join(" ")}>Curiosity · Digital menu</h2></div>
    )
}

export default PgTtl