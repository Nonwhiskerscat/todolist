/*eslint-disable*/
import React from 'react';
import {BiBadge} from 'react-icons/bi';
import {HiOutlineBadgeCheck} from 'react-icons/hi';

import '../TodolistStyle/TodoListItem.scss';
import cn from 'classnames';

function TodoListItem({
    todo,
    onRemove,
    onToggle,
    onModify,
    onModal,
    style
}) 

{
const { id, text, checked } = todo;

const Dom = num => {
    if(num%100==11||num%100==12||num%100==13) return 'th';
    else if(num%10==1) return 'st';
    else if(num%10==2) return 'nd';
    else if(num%10==3) return 'rd';
    else return 'th';
}

return (
<div className="TodoListItem-virtualized" style={style}>
    <li className="TodoListItem">
    <div
        className={cn('checkbox', { checked: checked })}
        onClick={() => onToggle(id)}
    >
        {checked ? <HiOutlineBadgeCheck /> : <BiBadge />}
        <div className="text"><div className='id_cst'>{id}{Dom(id)} list</div>{text}</div>
    </div>
    <div
        className="mod_box"
        onClick={() => {
        onModify(todo);
        onModal();
        }}
    >
        Modify
    </div>
    <div className="remove" onClick={() => onRemove(id)}>
        <div className='del_box'>Delete</div>
    </div>
    
    </li>
</div>
);
}

export default React.memo(TodoListItem);
