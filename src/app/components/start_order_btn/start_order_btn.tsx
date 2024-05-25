'use client';
import React from 'react';
import styles from "./start_order_btn.module.css";

const StartOrderBtn = () => {
    return (
        <div>
            <button className={styles.btn} onClick={() => console.log('working')}>Start your order</button>
        </div>
    )
}

export default StartOrderBtn