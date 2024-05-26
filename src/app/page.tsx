import StartOrderBtn from "./components/start_order_btn/start_order_btn";
import RectBtn from "./components/rectangular_btn/rectangular_btn";
import styles from "./page.module.css";
import teaBr from "../../public/main_page_images/teabr.png";
import cofBr from "../../public/main_page_images/cfp1tu.png";

import { dbConnect } from '@/app/lib/db';
import { NextResponse } from "next/server";

import Order from './model/Order';

async function GET() {
  const con = await dbConnect();
  console.log("abc");

  const article = new Order({
    item: "this-is-a-test",
    paid: false
  });
  
  // Insert the article in our MongoDB database
  await article.save();
  

  return new NextResponse('connected');
}

export default function Home() {

  GET()
  // TODO: 
  return (
    <main className={styles.mn}>
      {/*<div className={styles.GHOST}></div>*/}
      <div className={styles.gradient_bg}>
        <div className={styles.title_flex}>
          <p className={styles.motto}>Specialty Coffee and Tea from all around the Earth📍</p>
          <h1 className={styles.main_title}>Curiosity Coffee & Tea</h1>
          <p className={styles.sub_title}>Digital Menu</p>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.btn_flex}>
          <StartOrderBtn />
        </div>
        <div className={styles.btns_flex}>
          <RectBtn logo_url={1}/>
          <RectBtn logo_url={2}/>
          <RectBtn logo_url={3}/>
        </div>
      </div>
        <img src={teaBr.src} className={styles.tea_branch}></img>
        <img src={cofBr.src} className={styles.cof_branch}></img>
    </main>
  );
}
