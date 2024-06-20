"use client"

import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import PgTtl from "../components/page_title/page_title";
import LoadingScrnGrn from "../components/loading_screen_grinder/loading_screen_grinder";

import cof_im from "../../../public/cofft1.png"
import tea_im from "../../../public/tea.png"
import lvrmcs from "../../../public/loveramics.webp"

import Link from 'next/link';

type Coffee = {
    drink_name: string;
    allergen_info: number;
    price: number;
    description: string;
    image: string;
    type: string;  // Add this line to the type definition
}

export default function Menu() {
    const [coffees, setCoffees] = useState<any[]>([]);
    const [teas, setTeas] = useState<any[]>([]);
    const [selector, setSelector] = useState(true);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    
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

                if(await cof_result) {
                    setLoaded(true)
                }

                setCoffees(cof_result.data.filter((item: Coffee) => item.type === 'cof'));
                setTeas(cof_result.data.filter((item: Coffee) => item.type === 'tea'));
                //const tea_result = await tea_response.json();
                //setTeas(cof_result.data);

            } catch (err:any) {
                setError(err.message);
            }
        }
    
        fetchData();
    }, []);
    
    const ref = selector ? coffees : teas;

    const itm_enc = (item:any) => {return encodeURIComponent(JSON.stringify(item))}

    return (
    <main>
        {/*<div className={styles.GHOST}></div>*/}
        {loaded?<></>:<LoadingScrnGrn/>}
        <div className={[styles.bg, selector ? styles.bg_cof : styles.bg_tea].join(" ")}>
            <PgTtl mode_={selector}/>
            <button onClick={()=>setSelector(!selector)} className={styles.selector_btn}>bb</button>
            <div className={styles.spacer}></div>
            {ref.map(item => ( 
                <div key={item.drink_name} className={[styles.cof, selector ? styles.cof_cof : styles.cof_tea].join(" ")}>
                    
                    <Link href={{ pathname: "/drink_details", query: { itm: itm_enc(item) } }} className={[styles.more, selector ? styles.more_cof : styles.more_tea].join(" ")} onClick={() => console.log('working')}>...</Link>
                    <h1 className={styles.coffee_name}>{item.drink_name}</h1>
                    <p className={styles.coffee_desc}>{item.description}</p>
                </div>
            ))}
        </div>
        <div className={[styles.circle, selector ? styles.circle_cof : styles.circle_tea].join(" ")}><img src={selector?cof_im.src:tea_im.src} className={styles.circ_im}></img></div>
    </main>
  );
}
