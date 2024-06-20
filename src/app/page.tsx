'use client'

import StartOrderBtn from "./components/start_order_btn/start_order_btn";
import RectBtn from "./components/rectangular_btn/rectangular_btn";
import styles from "./page.module.css";
import teaBr from "../../public/main_page_images/teabr.png";
import cofBr from "../../public/main_page_images/cfp1tu.png";

import { POST, GET, CreateCoffeeDto } from "./api/coffees/route"
import { NextRequest } from "next/server";

import { useState, useEffect } from 'react';

export default function Home() {

  //TODO: implement dark mode
  const [theme, setTheme] = useState("light")
  const [pressedR, setPressedR] = useState(false)
  const [pressedX, setPressedX] = useState(false)
  const [pressedY, setPressedY] = useState(false)

  let bb = false;
  useEffect(()=>{bb = (window.innerWidth>550 && window.innerWidth<900)?true:false})

  const [suggestion_tapped, setSug] = useState(bb);

  return (
    <main className={styles.mn}>
      {/*<div className={styles.GHOST}></div>*/}
      {suggestion_tapped? <></> : <div className={styles.size_suggestion} onClick={()=>setSug(true)}>
            <span><p style={{color: "#aa0000", textAlign:"center"}}>Attention!</p>This site was designed for and tested on smaller tablets only, experience on other devices may vary, as you will have a less polished view of the app. Tap anywhere to dismiss this message.</span>
      </div>}
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
          <RectBtn logo_url={pressedR ? 7 : 1} onClick={()=>{setPressedR(true);setPressedX(false);setPressedY(false)}} theme={theme}/>
          <RectBtn logo_url={pressedX ? 8 : 2} onClick={()=>{setPressedR(false);setPressedX(true);setPressedY(false)}} theme={theme}/>
          <RectBtn logo_url={pressedY ? 9 : 3} onClick={()=>{setPressedR(false);setPressedX(false);setPressedY(true)}} theme={theme}/>
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