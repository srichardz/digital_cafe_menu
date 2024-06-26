'use client';
import React from 'react';
import styles from "./rectangular_btn.module.css";
import rdIco from "../../../../public/button_icons/reddit-logo.svg";
import xIco from "../../../../public/button_icons/x-logo.svg";
import ytIco from "../../../../public/button_icons/yt-logo.svg";
import cashIco from "../../../../public/button_icons/cash.svg";
import ccardIco from "../../../../public/button_icons/cr-card.svg";
import btcIco from "../../../../public/button_icons/btc.svg";
import qrCode from "../../../../public/button_icons/qr_code.svg";
// TODO: replace ph qr with actual ones, make them bigger and maybe a fade-in would be nice too
import rdQr from "../../../../public/button_icons/qr_code.svg";
import xQr from "../../../../public/button_icons/qr_code.svg";
import ytQr from "../../../../public/button_icons/qr_code.svg";


function logo_(logo_url:number) {
    switch (logo_url) {
        case 0: return qrCode;
        case 1: return rdIco;
        case 2: return xIco;
        case 3: return ytIco;
        case 4: return cashIco;
        case 5: return ccardIco;
        case 6: return btcIco;
        case 7: return rdQr;
        case 8: return xQr;
        case 9: return ytQr;
        default: return rdIco;
    }
}

const RectBtn = ({logo_url, onClick, theme} : {logo_url : number, onClick:any, theme:string}) => {
    const logo = logo_(logo_url)

    return (
        <div>
            <button className={[styles.btn, theme=="light" ? styles.btn_light : styles.btn_dark].join(" ")} onClick={onClick} style={{backgroundImage: 'url(' + (logo.src) + ')'}}>
            </button>
        </div>
    )
}

export default RectBtn