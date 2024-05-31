'use client'

import StartOrderBtn from "./components/start_order_btn/start_order_btn";
import RectBtn from "./components/rectangular_btn/rectangular_btn";
import styles from "./page.module.css";
import teaBr from "../../public/main_page_images/teabr.png";
import cofBr from "../../public/main_page_images/cfp1tu.png";

import { POST, GET, CreateCoffeeDto } from "./api/coffees/route"
import { NextRequest } from "next/server";

import { useState } from 'react';

export default function Home() {

  //TODO: implement dark mode
  const [theme, setTheme] = useState("light")

  return (
    <main className={styles.mn}>
      {/*<div className={styles.GHOST}></div>*/}
      <div className={[styles.gradient_bg, theme=="light" ? styles.gradient_bg_light : styles.gradient_bg_dark].join(" ")}>
        <div className={styles.title_flex}>
          <p className={styles.motto}>Specialty Coffee and Tea from all around the Earth📍</p>
          <h1 className={styles.main_title}>Curiosity Coffee & Tea</h1>
          <p className={styles.sub_title}>Digital Menu</p>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.btn_flex}>
          <StartOrderBtn theme={theme}/>
        </div>
        <div className={styles.btns_flex}>
          <RectBtn logo_url={1} onClick={()=>console.log(0)} theme={theme}/>
          <RectBtn logo_url={2} onClick={()=>console.log(0)} theme={theme}/>
          <RectBtn logo_url={3} onClick={()=>console.log(0)} theme={theme}/>
        </div>
      </div>
      <img src={teaBr.src} className={[styles.tea_branch,theme].join(" ")}></img>
      <img src={cofBr.src} className={[styles.cof_branch,theme].join(" ")}></img>
    </main>
  );
}






  {/*
  const createCoffeeDTO: CreateCoffeeDto = {
    drink_name: "example",
    allergen_info: 0,
    price: 0,
    description: "pp",
  };
  
  const makeApiCall = async () => {
    try {
      await fetch(process.env.URL + '/api/coffees/', {
      method: 'POST',
      body: JSON.stringify(createCoffeeDTO)
    })
    } catch(e) {
      console.log(e)
    }
  }
*/}