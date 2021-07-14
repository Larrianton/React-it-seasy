import React, {useState} from "react";
import styles from "./Select.module.css"

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value: string
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectPropsType) {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue , setHoveredElementValue ] = useState (props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value:any) => {
        props.onChange(value);
        toggleItems();
    }
    const onKeyUp = () => {
        for (let i=0 ; i <props.items.length ; i++) {
            if (props.items[i].value === hoveredItem) {
                setHoveredElementValue(props.items[i+1].value)
                break;
            }
        }
    }
    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={styles.main} onClick={toggleItems}> {selectedItem && selectedItem.title}</span>
            {active &&
            <div className={styles.items}>
                {props.items.map(i => <li key={i.value}
                                          onMouseEnter={()=> setHoveredElementValue(i.value)}
                                          className={styles.item + " " + ( hoveredItem === i ? styles.selected : "" )}
                                          onClick={()=>onItemClick(i.value)}> {i.title}</li>)}
            </div>
            }

        </div>
    );


}







