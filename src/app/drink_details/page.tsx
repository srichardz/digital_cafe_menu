"use client"

import styles from "./page.module.css";
import { useState, useEffect, useRef, Suspense } from 'react';
import PgTtl from "../components/page_title/page_title";
import { useSearchParams } from 'next/navigation'
import marocchino_im from "../../../public/marocchino.png";
import Link from "next/link";

const images: any = {marocchino_im: marocchino_im}

type Coffee = {
    drink_name: string;
    allergen_info: number;
    price: number;
    description: string;
}

function Menu() {
    const [selector, setSelector] = useState(true);
    
    const [item, setItem] = useState<any>();
    const searchParams = useSearchParams();
    
    useEffect(() => {
        const itm = searchParams.get('itm');
        if (itm) {
            const parsedItem = JSON.parse(decodeURIComponent(itm));
            setItem(parsedItem);
        }
    }, [searchParams]);

    const boxRefs = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];
    
    useEffect(() => {
        const checkVisibility = setInterval(() => {
            boxRefs.forEach(elem => {
                if (elem.current) {
                    const rect = elem.current.getBoundingClientRect();
                    const fullyInView =
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth);
                    if (fullyInView) {
                        elem.current.classList.add(styles.grow);
                    } else {
                    elem.current.classList.remove(styles.grow);
                }    
                };
            });
            
        }, 10);
    }, []);

    return (
    <main>
        <div className={styles.bg}>
            
            <div ref={boxRefs[0]} className={[styles.hl, styles.hl1].join(" ")}>
                {item ? <img className={styles.im} src={images[item.image].src}></img> : <></>}
                {item ? <p className={styles.item_info}>{item.drink_name}</p> : <></>}
                <p className={styles.item_info}>Allergens: Hazelnut, milk</p>
                {item ? <p className={styles.item_info}>{item.allergen_info}</p> : <></>}
            </div>
            <div ref={boxRefs[1]} className={[styles.hl, styles.hl2].join(" ")}>
                <p className={styles.cust_text}>Milk options</p>
                <div className={styles.o_container}>
                    <div className={[styles.option, styles.milk].join(" ")}></div>
                    <div className={[styles.option, styles.lacfree].join(" ")}></div>
                    <div className={[styles.option, styles.coconm].join(" ")}></div>
                    <div className={[styles.option, styles.almonm].join(" ")}></div>
                </div>
                <p className={styles.cust_text}>Roast and origin</p>
                <div className={styles.o_container}>
                    <Link href={{ pathname: "/payment", query: {} }} className={[styles.option, styles.br].join(" ")}/>
                </div>
                <p>Medium Roast</p>
            </div>
            <div ref={boxRefs[2]} className={[styles.hl, styles.hl3].join(" ")}>
                {item ? <img className={styles.im} src={images[item.image].src}></img> : <></>}
                <p className={styles.item_info}>Wip</p>
                {item ? <p className={styles.item_info}>{item.allergen_info}</p> : <></>}
            </div>
        </div>
    </main>
  );
}

export default function MenuC() {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Menu />
            </Suspense>
        </main>
    );
}
