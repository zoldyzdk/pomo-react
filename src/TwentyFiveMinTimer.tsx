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
    );
}
export default TwentyFiveMinTimer;
