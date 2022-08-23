"use striсt";

import { useCallback, useState, useEffect, useRef } from "react";

//Timer promotion


export const deadline = '2023-08-12';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / (1000 * 60 * 60 * 24)),
    hours = Math.floor((t / (1000 * 60 * 60) % 24)),
    minutes = Math.floor((t / 1000 / 60 ) % 60),
    seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}


export function useTimer(endtime) {
    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const timeInterval = useRef(-1);

    const updateClock = useCallback(() => {
        const t = getTimeRemaining(endtime);

        setTimer({
            days: getZero(t.days),
            hours: getZero(t.hours),
            minutes: getZero(t.minutes),
            seconds: getZero(t.seconds),
        });

        if (t.total <= 0) {
            clearInterval(timeInterval.current);
        }
        
    },[endtime]);

    useEffect(()=> {
       timeInterval.current = setInterval(updateClock, 1000);
       return () => {
        clearInterval(timeInterval.current);
       };
    },[]);

    return timer;
}
