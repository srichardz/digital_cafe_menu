'use client';
import React from 'react';
import styles from "./rectangular_btn.module.css";
import rdIco from "../../../../public/button_icons/reddit-logo.svg";
import xIco from "../../../../public/button_icons/x-logo.svg";
import ytIco from "../../../../public/button_icons/yt-logo.svg";
import cashIco from "../../../../public/button_icons/cash.svg";
import ccardIco from "../../../../public/button_icons/cr-card.svg";
import btcIco from "../../../../public/button_icons/btc.svg";

function logo_(logo_url:number) {
    switch (logo_url) {
        case 1: return rdIco;
        case 2: return xIco;
        case 3: return ytIco;
        case 4: return cashIco;
        case 5: return ccardIco;
        case 6: return btcIco;
        default: return rdIco;
    }
}

const RectBtn = ({logo_url, onClick} : {logo_url : number, onClick:any}) => {
    const logo = logo_(logo_url)

    return (
        <div>
            <button className={styles.btn} onClick={onClick} style={{backgroundImage: 'url(' + (logo.src) + ')'}}>
            </button>
        </div>
    )
}

export default RectBtn