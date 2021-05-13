import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Rating, ratingPropsType, starRatingType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";


type PageTitlePropsType = {
    title: string
}

function App() {

    let [value, setValue] = useState<starRatingType>(0)
    let [collapsed,setCollapsed]=useState<boolean> (false);
    let [btnValue , setBtnValue] = useState(false)

    function PageTitle(props: PageTitlePropsType) {
        return <h1>{props.title}</h1>
    }

    return (
        <div>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>

            <Rating value={value} onClick={setValue} />
            <Accordion titleValue={"Menu"} onClick={setCollapsed} collapsed={collapsed} />
            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<OnOff/>*/}
            <OnOff  on={setBtnValue} btnValue={btnValue} />

        </div>
    );
}


export default App;
