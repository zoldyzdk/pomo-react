import { useState } from 'react'
import './App.css'

const NavBar = () => {
  return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            PomoReact

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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App h-[100svh] grid justify-items-center">
      <div className=" max-w-4xl">
        <NavBar />
        <div className=" p-10 text-center flex flex-col items-center justify-center ">
          <div className="navbar bg-base-100 text-base">
            <button className="btn btn-ghost btn-active btn-sm normal-case h-1">Pomodoro</button>
            <a className="btn btn-ghost normal-case btn-sm">Intervalo Curto</a>
            <a className="btn btn-ghost normal-case btn-sm">Intervalo Longo</a>
          </div>

          <div className=" flex flex-col p-10 gap-10 items-center">
            <span className="countdown font-mono text-7xl">
              <span className="" style={{ "--value": 25 }}></span>:
              <span style={{ "--value": 0 }}></span>
            </span>
            <button className="btn btn-outline btn-lg">Começar!</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App
