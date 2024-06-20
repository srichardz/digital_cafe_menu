"use client"
import styles from "./page.module.css";
import PgTtl from "../components/page_title/page_title";

import { useState, useEffect } from 'react';


export default function OrderConf() {
  const [prev_qr, setPrevQR] = useState(false);
  const [prev_cr, setPrevCR] = useState(false);

  return (
    <main>
      <PgTtl />
      <div className={styles.bg}>
        <div className={styles.spacer}></div>
        <p className={styles.order_conf_text}>Thank you for your purchase! You've successfully ordered your drink, your drink will be delivered to you in a few minutes. "Patience is bitter, but its fruit is sweet."<a> In the meanwhile please consider reading about the beloved drink we all enjoy.</a></p>
        <div className={styles.spacer}></div>
      </div>
    </main>
  );
}
