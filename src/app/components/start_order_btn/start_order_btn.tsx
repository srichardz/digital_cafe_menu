'use client';
import React from 'react';
import styles from "./start_order_btn.module.css";

import Link from 'next/link';

const StartOrderBtn = () => {
    return (
        <div>
            <Link href="/menu" className={styles.btn} onClick={() => console.log('working')}>Start your order</Link>
        </div>
    )
}

export default StartOrderBtn