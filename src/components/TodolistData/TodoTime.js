import "../TodolistStyle/TodoInsert.scss";
import { useEffect, useState } from "react";

// 남은 시간 함수

function Deadline() {
    const today=new Date();
    const today2=new Date();
    const tomorrow=new Date(today2.setDate(today2.getDate()+1));
    tomorrow.setHours(0,0,0,0);
    const rest=tomorrow.getTime()-today.getTime();
    return rest;
}

function getHo(nyan) {
    return Math.floor(nyan/3600);
}

function getMn(nyan) {
    return Math.floor((nyan%3600)/60);
}

function getSc(nyan) {
    return Math.floor((nyan%3600)%60);
}

function TimeRest() {

    const dd=Deadline()/1000;

    let ddline= {
        hour:getHo(dd),
        minute:getMn(dd),
        second: getSc(dd)
    };

    return ddline;

}

function TodoTime() {
    const [timerest, setTimeRest] = useState(TimeRest());
    
    useEffect(()=> {
        setTimeout(() => {
            setTimeRest(TimeRest());
        },1000)
    })

    return(
        <div className="time_rest">
            <p>내일까지 {timerest.hour}시간 {timerest.minute}분 {timerest.second}초 남았다냥!</p>
        </div>
    )
}


export default TodoTime;