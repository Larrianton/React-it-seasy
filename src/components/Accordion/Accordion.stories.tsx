import React, {useState} from 'react';
import { Story, Meta } from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";



export default {
    title: 'Accordion',
    component: Accordion,

} as Meta;

const collapsedMode: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
const uncollapsedMode: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const collapsed = collapsedMode.bind({});
collapsed.args = {
    titleValue: "Menu",
   collapsed:true ,
    onClick: action ("Accordion change mode fired")
};
export const uncollapsed = uncollapsedMode.bind({});
uncollapsed.args = {
    titleValue: "Menu",
    collapsed:false ,
    onClick: action ("Accordion change mode fired")
};

 export const AccordionChangeMode: Story<AccordionPropsType> = (args) => {
     const [value ,setValue] = useState<boolean>(false)
     return <Accordion titleValue={"Menu"} collapsed={value} onClick={setValue} />
 }
