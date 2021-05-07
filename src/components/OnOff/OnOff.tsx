import React, {useState} from "react";


type OnOffprintType = {
    ///value: boolean;
}

export function OnOff(props: OnOffprintType) {

    let [value , setValue] = useState(true)
    const wrapper = {
        display: "flex",
        justifyContent: "space-Around",
        marginTop: "20px"
    }
    const btnOn = {
        width: "100px",
        height: "50px",
        border: "solid black",
        backgroundColor:value ? "green":"white"
    }
    const btnOff = {
        width: "100px",
        height: "50px",
        border: "solid black",
        backgroundColor: value ? "white":"red"
    }
    const indicator = {
        width: "50px" ,
        height: "50px",
        borderRadius: "25px",
        border: "solid black",
        backgroundColor: value ? "green":"red"
    }
    return (
        <div style={wrapper}>
            <div style={btnOn} onClick={()=>setValue(true)}>
                ON
            </div>
            <div style={btnOff} onClick={()=>setValue(false)}>

                OFF

            </div>

            <div style={indicator} >

            </div>

        </div>
    );

}