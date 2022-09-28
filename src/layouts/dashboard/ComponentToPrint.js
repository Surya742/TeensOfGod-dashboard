import * as React from "react";

export function ComponentToPrint({ref}){
    // canvasEl;
    // setRef = (ref) => (this.canvasEl = ref);

    return(
        <div style={{ display: 'none'}}>
            <h2>Name: Surya Kumar Sahani</h2>
            <p>Email: surya@gmail.com</p>
            {/* <img src={props.QrCode} alt="qr-code" /> */}
        </div>
    )
}