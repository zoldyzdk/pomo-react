import React, { useState, useEffect } from "react";
const Timer = () => {
const [seconds, setSeconds] = useState(1500); // 1500 seconds = 25 minutes
const [isActive, setIsActive] = useState(false);
const [btnActive, setBtnActive] = useState('pomo');

    function handlePomo() {
        setSeconds(1500);
        setBtnActive('pomo');
    }
    function handleShort() {
        setSeconds(300);
        setBtnActive('short');
    }
    function handleLong() {
        setSeconds(1800);
        setBtnActive('long');
    }

    // setSeconds(props.interv);
    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(1500);
        setIsActive(false);
    }

    useEffect(() => {
        let interval: (number | any) = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    interface SpanStyle extends React.CSSProperties{
        '--value': number;
    }

    const spanMin: SpanStyle = { "--value": Math.floor(seconds / 60) };
    const spanSec: SpanStyle = { "--value": seconds % 60}

    return (
        <>
            <div className=" p-2 sm:p-10 text-center flex flex-col items-center justify-center">
                <div className="navbar bg-base-100 text-base w-full flex flex-wrap justify-center">
                    <button
                        onClick={ handlePomo }
                        className={"btn btn-ghost btn-sm normal-case h-1 p-1 " + ((btnActive === 'pomo') ? 'btn-active' : '')}>
                        Pomodoro
                    </button>
                    <button
                        onClick={ handleShort }
                        className={"btn btn-ghost normal-case btn-sm p-1 " + ((btnActive === 'short') ? 'btn-active' : '')}>
                        Intervalo Curto
                    </button>
                    <button
                        onClick={ handleLong }
                        className={"btn btn-ghost normal-case btn-sm p-1 " + ((btnActive === 'long') ? 'btn-active' : '')}>
                        Intervalo Longo
                    </button>
                </div>
            </div>
            <div className=" flex flex-col p-10 gap-10 items-center">
              <span className="countdown font-mono text-7xl">
                <span className="" style={spanMin}></span>:
                <span style={spanSec}></span>
              </span>
              <div className="flex gap-4">

                <button onClick={toggle} className="btn btn-outline btn-lg">
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button onClick={reset} className="btn btn-outline btn-lg">
                    Reset
                </button>
              </div>
            </div>
        </>
    );
}
export default Timer;
