import {useEffect, useState} from 'react'
import './App.css'
import github from "./assets/icons8-github-squared.svg"
import TwentyFiveMinTimer from "./TwentyFiveMinTimer";

const NavBar = () => {
  return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="https://github.com/Sherlockzen/pomo-react" target="_blank">
            PomoReact
          <img className=" w-12" src={github} alt="Github Icon" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Config</a></li>

          </ul>
        </div>
      </div>
  )
}

// function Counter() {
//     const [count, setCount] = useState(0);
//
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setCount(c => c + 1); // ✅ Pass a state updater
//         }, 1000);
//         return () => clearInterval(intervalId);
//     }, []); // ✅ Now count is not a dependency
//
//     return <h1>{count}</h1>;
// }

const Timer = () => {
  const [count, setCount] = useState(0)
      // useEffect(() => {
      //   const intervalId = setInterval(() => {
      //     setCount((c) => c + 1);
      //   }, 1000);
      //   return () => clearInterval(intervalId);
      // }, []);

    function handleStart() {
    }

  return (
    <div className=" flex flex-col p-10 gap-10 items-center">
      <span className="countdown font-mono text-7xl">
        <span className="" style={{ "--value": count }}></span>:
        <span style={{ "--value": 0 }}></span>
      </span>
      <button className="btn btn-outline btn-lg">
        Começar!
      </button>
    </div>
  );


}

function App() {



  return (
    <div data-theme="light" className="App h-[100svh] grid justify-items-center">
      <div className=" max-w-3xl">
        <NavBar />
        <div className=" p-2 sm:p-10 text-center flex flex-col items-center justify-center">
          <div className="navbar bg-base-100 text-base flex flex-wrap justify-center">
            <button className="btn btn-ghost btn-active btn-sm normal-case h-1 p-1">Pomodoro</button>
            <a className="btn btn-ghost normal-case btn-sm p-1">Intervalo Curto</a>
            <a className="btn btn-ghost normal-case btn-sm p-1">Intervalo Longo</a>
          </div>

        </div>
        <TwentyFiveMinTimer />
      </div>
    </div>
  );
}

export default App
