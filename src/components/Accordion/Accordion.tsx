import React from "react";

export type AccordionPropsType = {
    titleValue: string
    onClick: (collapsed:boolean) => void
    collapsed: boolean

}


type AccordionTitlePropsType = {
    title: string
    onClick:(collapsed:boolean) => void
    collapsed: boolean

}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick } collapsed ={props.collapsed} />
            {props.collapsed && <AccordionBody/>}
        </div>
    );
}


function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3 onClick={ () => props.onClick(!props.collapsed)} >---{props.title}---</h3>
}

function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
