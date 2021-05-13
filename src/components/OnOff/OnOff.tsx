import React, {useState} from "react";


type OnOffprintType = {
    on:(off:boolean) => void
    btnValue:boolean
}

export function OnOff(props: OnOffprintType) {


    const wrapper = {
        display: "flex",
        justifyContent: "space-Around",
        marginTop: "20px"
    }
    const btnOn = {
        width: "100px",
        height: "50px",
        border: "solid black",
        backgroundColor:props.btnValue ? "green":"white"
    }
    const btnOff = {
        width: "100px",
        height: "50px",
        border: "solid black",
        backgroundColor: props.btnValue ? "white":"red"
    }
    const indicator = {
        width: "50px" ,
        height: "50px",
        borderRadius: "25px",
        border: "solid black",
        backgroundColor: props.btnValue ? "green":"red"
    }
    return (
        <div style={wrapper}>
            <div style={btnOn} onClick={()=>props.on(!props.btnValue)}>
                ON
            </div>
            <div style={btnOff} onClick={()=>props.on(!props.btnValue)}>

                OFF

            </div>

            <div style={indicator} >

            </div>

        </div>
    );

}