import React, {useState} from "react";


type StarRatingType = {
    selected: boolean
    setValue: (value:valueStarType) => void
    value: valueStarType
}
export type valueStarType = 0 | 1 | 2 | 3 | 4 | 5


export function UncontrolledRating() {

    let [value, setValue] = useState<valueStarType>(0)




    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>

        </div>
    );


}

function Star(props: StarRatingType) {

    return  <span onClick={ () => props.setValue(props.value)} >
        {props.selected ? <b>Star</b> : "Star"}</span>
}

