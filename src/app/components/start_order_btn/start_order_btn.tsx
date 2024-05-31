'use client';
import React from 'react';
import styles from "./start_order_btn.module.css";

import Link from 'next/link';

const StartOrderBtn = ({theme} : {theme:string}) => {
    return (
        <div>
            <Link href="/menu" className={[styles.btn, theme=="light" ? styles.btn_light : styles.btn_dark].join(" ")} onClick={() => console.log('working')}>Start your order</Link>
        </div>
    )
}

export default StartOrderBtn