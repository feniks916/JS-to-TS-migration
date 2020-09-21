import React, { useState, useEffect } from 'react';
import classes from './style.module.scss';

import { ITime } from '../../types'

interface timeProps {
    data: ITime
}

const Timer: React.FC<timeProps> = ({ data }) => {

    const [time, setTime] = useState<ITime>({
        msec: data.msec,
        sec: data.sec,
        min: data.min,
        hrs: data.hrs,
    });
    const [interv, setInterv] = useState<number>(0);

    let updatedMs: number = time.msec;
    let updatedS: number = time.sec;
    let updatedM: number = time.min;
    let updatedH: number = time.hrs;

    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 99) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({
            msec: updatedMs,
            sec: updatedS,
            min: updatedM,
            hrs: updatedH,
        });
    };

    const start = () => {
        run();
        setInterv(window.setInterval(run, 10));
    };

    useEffect(() => {
        start()
        console.log(data)
        return () => {
            window.clearInterval(interv)
        }
    }, [])

    return (
        <div className={classes.main}>
            <div className={classes.wrapper}>
                <h2>С момента открытия страницы прошло</h2>
                <div className={classes.timeCounter}>
                    <p>{time.hrs >= 10 ? time.hrs : `0${time.hrs}`}:</p>
                    <p>{time.min >= 10 ? time.min : `0${time.min}`}:</p>
                    <p>{time.sec >= 10 ? time.sec : `0${time.sec}`}</p>
                </div>
            </div>
        </div>
    );
};


export default Timer
