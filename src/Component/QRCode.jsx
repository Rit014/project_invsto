import React from 'react';
import QRCODE from './asset/image-qr-code.png';
import './style.css';

const QRCode = () => {
    return (

        <>
            <div className="main">
                <div className="inner-div">
                    <div className="qrDiv">
                        <img src={QRCODE} alt="image" />
                        <div className="desc">
                            <h5>Improve your front-end skills by building projects</h5>
                            <p>Scan the QR CODE to visit Frontend Mentor and take your coding skill to the next level</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QRCode;