"use client"
import styles from "./page.module.css";
import PgTtl from "../components/page_title/page_title";
import RectBtn from "../components/rectangular_btn/rectangular_btn";

import { useState, useEffect } from 'react';


export default function Home() {

  const types_of_p = {
    0:<p className={styles.order_details}>Order details</p>/*tr.map(item => (<div className={styles.}><p className={styles.ord_line}>{item.itm}: {item.pri} EUR</p></div> ))*/,
    1:<><div className={styles.spacer}></div><div><p>Please pay at the counter named KIOSK with the following code:  #{1234}</p></div></>,
    2:<><div className={styles.spacer}></div><div>ccard</div></>,
    3:<><div className={styles.spacer}></div><div>btc</div></>
  }
  const [selected_payment, setSelectedPayment] = useState(types_of_p[0]);

  const btn_handler = (type_of_p : string) => {
    switch(type_of_p) {
      case "order_details":
        setSelectedPayment(types_of_p[0])
        return;
      case "cash_":
        setSelectedPayment(types_of_p[1])
        return;
      case "ccard_":
        setSelectedPayment(types_of_p[2])
        return;
      case "btc_":
        setSelectedPayment(types_of_p[3])
        return;
      default:
        console.log("error")
        return;
    }
  }

  return (
    <main>
      <PgTtl />
      <div className={styles.bg}>
        {selected_payment}
        <div className={styles.spacer}></div>
        <p className={styles.order_conf_text}>Please select payment type!</p>
        <p className={styles.order_conf_text} onClick={() => btn_handler("order_details")}>Total: {0} EUR</p>
        <div className={styles.btns_flex}>
          <RectBtn logo_url={4} onClick={() => btn_handler("cash_")}/>
          <RectBtn logo_url={5} onClick={() => btn_handler("ccard_")}/>
          <RectBtn logo_url={6} onClick={() => btn_handler("btc_")}/>
        </div>
      </div>
    </main>
  );
}
