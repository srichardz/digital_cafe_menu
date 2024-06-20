"use client"

import styles from "./page.module.css";
import { useState, useEffect } from 'react';
import PgTtl from "../components/page_title/page_title";
import { useSearchParams } from 'next/navigation'

type Coffee = {
    drink_name: string;
    allergen_info: number;
    price: number;
    description: string;
}

export default function Menu() {
    const [selector, setSelector] = useState(true);

    const [item, setItem] = useState(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const itm = searchParams.get('itm');
        if (itm) {
            const parsedItem = JSON.parse(decodeURIComponent(itm));
            setItem(parsedItem);
        }
    }, [searchParams]);
    
    return (
    <main>
        <PgTtl mode_={selector}/>
        <div className={styles.spacer}></div>
    </main>
  );
}
