import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}


type AccordionTitlePropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed , setCollapsed]=useState(true);



    return <div>
        <AccordionTitle title={props.titleValue}/>
        {collapsed && <AccordionBody/>}
        <button onClick={() => setCollapsed(false)}>Collapsed</button>
        <button onClick={() => setCollapsed(true)}>Expand</button>
    </div>;
}


function AccordionTitle(props: AccordionTitlePropsType) {

    return <h3>---{props.title}---</h3>
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
