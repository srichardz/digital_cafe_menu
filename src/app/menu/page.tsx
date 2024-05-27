"use client"

import styles from "./page.module.css";
import { useState, useEffect } from 'react';

import cof_im from "../../../public/cofft1.png"

type Coffee = {
    drink_name: string;
    allergen_info: number;
    price: number;
    description: string;
}

export default function Menu() {
    const [coffees, setCoffees] = useState<any[]>([]);;
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/coffees');
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const result = await response.json();
                setCoffees(result.data);
            } catch (err:any) {
                setError(err.message);
            }
        }
    
        fetchData();
    }, []);
    
    return (
    <main>
        {<div className={styles.GHOST}></div>}
        <div className={styles.bg}>
            <div><h2 className={styles.firstc}>Curiosity · Digital menu</h2></div>
            <div className={styles.spacer}></div>
            {coffees.map(item => ( 
                <div className={styles.cof}>
                    <h1 className={styles.coffee_name}>{item.drink_name}</h1>
                    <p className={styles.coffee_desc}>{item.description}</p>
                </div> 
            ))}
        </div>
        <div className={styles.circle}><img src={cof_im.src} className={styles.circ_im}></img></div>
    </main>
  );
}
