"use client"

import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import PgTtl from "../components/page_title/page_title";

import cof_im from "../../../public/cofft1.png"
import tea_im from "../../../public/cofft1.png"
import lvrmcs from "../../../public/loveramics.webp"

type Coffee = {
    drink_name: string;
    allergen_info: number;
    price: number;
    description: string;
}

export default function Menu() {
    const [coffees, setCoffees] = useState<any[]>([]);
    const [teas, setTeas] = useState<any[]>([]);
    const [selector, setSelector] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const cof_response = await fetch('/api/coffees');

                if (!cof_response.ok) {
                    throw new Error('Failed to fetch');
                }

                //const tea_response = await fetch('/api/tea');
                //if (!tea_response.ok) {
                //    throw new Error('Failed to fetch');
                //}

                const cof_result = await cof_response.json();
                setCoffees(cof_result.data);
                setTeas(cof_result.data)
                //const tea_result = await tea_response.json();
                //setTeas(cof_result.data);

            } catch (err:any) {
                setError(err.message);
            }
        }
    
        fetchData();
    }, []);
    
    return (
    <main>
        {<div className={styles.GHOST}></div>}
        <div className={[styles.bg, selector ? styles.bg_cof : styles.bg_tea].join(" ")}>
            <PgTtl />
            <button onClick={()=>setSelector(!selector)} className={styles.bbb}>bb</button>
            <div className={styles.spacer}></div>
            {coffees.map(item => ( 
                <div key={item.drink_name} className={[styles.cof, selector ? styles.cof_cof : styles.cof_tea].join(" ")}>
                    <div className={styles.more}>...</div>
                    <h1 className={styles.coffee_name}>{item.drink_name}</h1>
                    <p className={styles.coffee_desc}>{item.description}</p>
                </div>
            ))}
        </div>
        <div className={[styles.circle, selector ? styles.circle_cof : styles.circle_tea].join(" ")}><img src={selector?cof_im.src:tea_im.src} className={styles.circ_im}></img></div>
    </main>
  );
}
