import React from 'react';
import styles from "./loading_screen_grinder.module.css";

const LoadingScrnGrn = () => {

    return (
        <div className={styles.loading}>
            <div className={styles.loading_container}>
                <div className={styles.grinder_body}>
                    <div className={styles.grip}/>
                    <div className={styles.dial}/>
                    <div className={styles.plastic}/>
                    <div className={styles.handle_start}/>
                    <div className={styles.path}/>
                    <div className={styles.handle_r}>
                        <div className={styles.moveY}>
                            <div className={styles.handle_h}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScrnGrn