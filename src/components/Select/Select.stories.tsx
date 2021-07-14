import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Select, SelectPropsType} from "./Select";


export default {
    title: 'baseSelect',
    component: Select,

} as Meta;

const baseSelect: Story<SelectPropsType> = (args) => <Select {...args} />;

;
export const selectValue2 = baseSelect.bind({});
selectValue2.args = {
    value: "2",
    onChange: action ("Select was changed") ,
    items:[
        {title:"Moscow",value:"1"} ,
        {title:"Minsk",value:"2"} ,
        {title:"Kiev",value:"3"} ,
    ]
};
export const ModeChanging:Story<SelectPropsType> = (props:SelectPropsType) =>  {
    const [value,setValue] = useState<any>(null)
    return <Select onChange= {setValue}  value={value}  items={[
        {title:"Moscow",value:"1"} ,
        {title:"Minsk",value:"2"} ,
        {title:"Kiev",value:"3"} ,
    ]} />
}




