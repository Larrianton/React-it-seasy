import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';
import {Rating, ratingPropsType, starRatingType} from "./Rating";
import {action} from "@storybook/addon-actions";



export default {
    title: 'Example/Rating',
    component: Rating,

} as Meta;

const UncontrolledRating: Story<ratingPropsType> = (args) => <Rating {...args} />;
const callback=action ("return value Star")
export const emptyRating = UncontrolledRating.bind({});
emptyRating.args = {
    value: 0 ,
    onClick: action ("return value Rating")
};
export const Rating1 = UncontrolledRating.bind({});
Rating1.args = {
    value: 1 ,
    onClick: callback
};
export const Rating2 = UncontrolledRating.bind({});
Rating2.args = {
    value: 2 ,
    onClick: callback
};
export const Rating3 = UncontrolledRating.bind({});
Rating3.args = {
    value: 3 ,
    onClick: callback
};
export const Rating4 = UncontrolledRating.bind({});
Rating4.args = {
    value: 4 ,
    onClick: callback
};
export const Rating5 = UncontrolledRating.bind({});
Rating5.args = {
    value: 5 ,
    onClick: callback
};
 export const RatingChangeMode: Story<ratingPropsType> = (args) => {
     const [value ,setValue] = useState<starRatingType>(0)
     return <Rating value={value} onClick={setValue} />
 }
