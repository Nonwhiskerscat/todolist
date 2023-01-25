/*eslint-disable*/
import "../TodolistStyle/TodoInsert.scss";
import {GiFeline} from 'react-icons/gi';
import { useCallback, useState } from "react";

function TodoInsert({onInsert}) {
    
    const [value, setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        }
    ,[onInsert, value])
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="일정을 입력하라냥!" onChange={onChange} value={value}  />
            <button type="submit">
                <GiFeline />
            </button>
        </form>
    )
}

export default TodoInsert;