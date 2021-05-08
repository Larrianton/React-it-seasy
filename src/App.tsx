import React from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

type PageTitlePropsType = {
    title: string
}

function App() {

    function PageTitle(props: PageTitlePropsType) {
        return <h1>{props.title}</h1>
    }

    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>


            <UncontrolledAccordion titleValue={"Menu"}/>

            <UncontrolledRating/>
            <OnOff/>


        </div>
    );
}


export default App;
