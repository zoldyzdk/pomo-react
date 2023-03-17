import { useState, useEffect } from "react";

const TwentyFiveMinTimer = () => {
    const [seconds, setSeconds] = useState(1500); // 1500 seconds = 25 minutes
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(1500);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        // <div>
        //     <h1>{Math.floor(seconds / 60)}:{seconds % 60 < 10 ? '0' : ''}{seconds % 60}</h1>
        //     <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
        //     <button onClick={reset}>Reset</button>
        // </div>
        <div className=" flex flex-col p-10 gap-10 items-center">
          <span className="countdown font-mono text-7xl">
            <span className="" style={{ "--value": Math.floor(seconds / 60) }}></span>:
            <span style={{ "--value": seconds % 60}}></span>
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
    );
}
export default TwentyFiveMinTimer;
