'use client';
import React from 'react';
import styles from "./rectangular_btn.module.css";
import rdIco from "../../../../public/main_page_images/reddit-logo.webp";
import xIco from "../../../../public/main_page_images/x_logo.png";
import ytIco from "../../../../public/main_page_images/youtube_logo.png";

function logo_(logo_url:number) {
    switch (logo_url) {
        case 1: return rdIco;
        case 2: return xIco;
        case 3: return ytIco;
        default: return rdIco;
    }
}

const RectBtn = ({logo_url} : {logo_url : number}) => {
    const logo = logo_(logo_url)

    return (
        <div>
            <button className={styles.btn} onClick={() => console.log('working')}>
            </button>
            <div className={styles.btn_icon} style={{backgroundImage: 'url(' + (logo.src) + ')'}}></div>
        </div>
    )
}

export default RectBtn