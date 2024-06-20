"use client"
import styles from "./page.module.css";
import PgTtl from "../components/page_title/page_title";
import RectBtn from "../components/rectangular_btn/rectangular_btn";

import { useState, useEffect } from 'react';


export default function Home() {
  // prevqr means previously btc qr code was selected
  // prevcr means previously credit card was selected
  const [prev_qr, setPrevQR] = useState(false);
  const [prev_cr, setPrevCR] = useState(false);

  const types_of_p = {
    0:<p className={styles.order_details}>Order details</p>/*tr.map(item => (<div className={styles.}><p className={styles.ord_line}>{item.itm}: {item.pri} EUR</p></div> ))*/,
    1:<><div className={styles.spacer}></div><div className={styles.cash_opt}>Please wait for a waiter to pay with cash</div></>,
    2:<><div className={styles.spacer}></div><div onClick={()=> {setTimeout(function(event:any) {window.location.href = "http://localhost:3000/order_confirmation"; /* https://digital-cafe-menu.vercel.app/order_confirmation*/}, 10000)}} className={[styles.credit_card, prev_qr ? styles.credit_card_ani_prevqr : styles.credit_card_ani].join(" ")}><div className={[styles.chip, prev_qr ? styles.chip_ani_prevqr : styles.chip_ani].join(" ")}></div><div className={[styles.credit_card_num, prev_qr ? styles.credit_card_num_ani_prevqr : styles.credit_card_num_ani].join(" ")}><p>0000 0000 0000 1111</p></div><div className={[styles.mc_logo, prev_qr ? styles.mc_logo_ani_prevqr : styles.mc_logo_ani].join(" ")}></div></div></>,
    3:<><div className={styles.spacer}></div><div className={[styles.btc_bg, prev_cr ? styles.btc_bg_ani_prevcr : styles.btc_bg_ani].join(" ")}><div className={[styles.btc_qr, prev_cr ? styles.btc_qr_ani_prevcr : styles.btc_qr_ani].join(" ")}></div></div></>
  }
  const [selected_payment, setSelectedPayment] = useState(types_of_p[0]);

  const btn_handler = (type_of_p : string) => {
    //setAnim("fade_ 1s forwards")
    switch(type_of_p) {
      case "order_details":
        setPrevQR(false)
        setPrevCR(false)
        setSelectedPayment(types_of_p[0])
        return;
      case "cash_":
        setPrevQR(false)
        setPrevCR(false)
        setSelectedPayment(types_of_p[1])
        return;
      case "ccard_":
        setPrevCR(true)
        setSelectedPayment(types_of_p[2])
        return;
      case "btc_":
        setPrevQR(true)
        setSelectedPayment(types_of_p[3])
        return;
      default:
        console.log("error")
        return;
    }
  }

  return (
    <main>
      {/*<div className={styles.GHOST}></div>*/}
      <PgTtl />
      <div className={styles.bg}>
        {selected_payment}
        <div className={styles.spacer}></div>
        <p className={styles.order_conf_text}>Please select payment type!</p>
        <p className={styles.order_conf_text} onClick={() => btn_handler("order_details")}>Total: {0} EUR</p>
        <div className={styles.btns_flex}>
          <RectBtn logo_url={4} onClick={() => btn_handler("cash_")} theme={""}/>
          <RectBtn logo_url={5} onClick={() => btn_handler("ccard_")} theme={""}/>
          <RectBtn logo_url={6} onClick={() => btn_handler("btc_")} theme={""}/>
        </div>
      </div>
    </main>
  );
}
