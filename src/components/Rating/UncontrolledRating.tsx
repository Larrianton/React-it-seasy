import React, {useState} from "react";

type RatingPropsType = {
    //starCount: number
}
type StarRatingType = {
    b: boolean
}
type valueStarType = 0 | 1 | 2 | 3 | 4 | 5


export function UncontrolledRating(props: RatingPropsType) {

    let [value, setValueStar] = useState<valueStarType>(0)


    const AddRating = () => {

        if (value < 5) {
            setValueStar((value + 1) as valueStarType)
        } else {
            return value = 0
        }
    }
    const DelRating = () => {
        if (value > 0 && value <= 5) {
            setValueStar((value - 1) as valueStarType)
        }

    }

    return (
        <div>
            <Star b={value > 0}/>
            <Star b={value > 1}/>
            <Star b={value > 2}/>
            <Star b={value > 3}/>
            <Star b={value > 4}/>
            <button onClick={AddRating}> Add Rating</button>
            <button onClick={DelRating}>Del Rating</button>
        </div>
    );


}

function Star(props: StarRatingType) {
    if (!props.b) {
        return <span>Star</span>
    } else return <b>Star</b>

}



