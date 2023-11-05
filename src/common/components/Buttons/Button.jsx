import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

function Btn({ disable, variant2, defaultValue, content, width, height, handleBtn }) {
    const buttonStyle = {
        width: width || styles.defaultWidth,
        height: height || styles.defaultHeight,
    };

    return (
        <button onClick={handleBtn}
            className={clsx(styles.btn, {
                [styles.disable]: disable,
                [styles.variant2]: variant2,
                [styles.defaultValue]: defaultValue
            })}
            style={buttonStyle}
        >
            {content}
        </button>
    );
}



export function ArrowBtnLeft() {
    return (

        <div className={styles.ArrowBtnLeft}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 113 113" fill="none">
                <g filter="url(#filter0_d_16_440)">
                    <circle cx="54.5" cy="52.5" r="44.5" fill="white" />
                    <path d="M66 31.9659V26.5605C66 26.092 65.4662 25.8333 65.1057 26.12L33.8528 50.7413C33.5873 50.9496 33.3724 51.2163 33.2246 51.5211C33.0768 51.8259 33 52.1607 33 52.5C33 52.8393 33.0768 53.1741 33.2246 53.4789C33.3724 53.7837 33.5873 54.0504 33.8528 54.2587L65.1057 78.88C65.4731 79.1667 66 78.908 66 78.4394V73.0341C66 72.6914 65.8405 72.3628 65.5771 72.153L40.6192 52.5035L65.5771 32.847C65.8405 32.6372 66 32.3086 66 31.9659Z" fill="black" />
                </g>
                <defs>
                    <filter id="filter0_d_16_440" x="0" y="0"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="2" dy="4" />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_440" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_440" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

export function ArrowBtnRight() {
    return (
        <div className={styles.ArrowBtnRight}>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 113 113" fill="none">
                <g filter="url(#filter0_d_16_442)">
                    <circle cx="54.5" cy="52.5" r="44.5" fill="white" />
                    <path d="M41 73.0341V78.4395C41 78.908 41.5338 79.1667 41.8943 78.88L73.1472 54.2587C73.4127 54.0504 73.6276 53.7837 73.7754 53.4789C73.9232 53.1741 74 52.8393 74 52.5C74 52.1607 73.9232 51.8259 73.7754 51.5211C73.6276 51.2163 73.4127 50.9496 73.1472 50.7413L41.8943 26.12C41.5269 25.8333 41 26.092 41 26.5606V31.9659C41 32.3086 41.1595 32.6372 41.4229 32.847L66.3808 52.4965L41.4229 72.153C41.1595 72.3628 41 72.6914 41 73.0341Z" fill="black" />
                </g>
                <defs>
                    <filter id="filter0_d_16_442" x="0" y="0"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="2" dy="4" />
                        <feGaussianBlur stdDeviation="6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_442" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_442" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Btn;
