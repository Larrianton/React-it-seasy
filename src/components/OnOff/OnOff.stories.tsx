import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {OnOff, OnOffprintType} from "./OnOff";


export default {
    title: 'OnOff',
    component: OnOff
} as Meta;

const OnOffStories: Story<OnOffprintType> = (args) => <OnOff {...args} />;

export const OnOffChangeMode: Story<OnOffprintType> = (args) => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={setValue} btnValue={value}/>
}
