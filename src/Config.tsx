import {useState} from "react";

const TempoPomo = ({max, def, min}) => {
    const [value, setValue] = useState(def)
    return (
        <div className="flex flex-col justify-center items-center">
            <input onChange={ (e) => setValue(Number(e.target.value))} type="range" min={min} max={max} className="range range-primary" step="5" defaultValue={def} />
            <div className="w-full flex justify-between px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
            <div className=" text-xl ">{`Minutes: ${value}`}</div>
        </div>
    )
}

const Config = ({ invi, onClose, children }) => {
 const [data, setData] = useState({
     pomo: 30,
     breakShoert: 10
 });

 if ( !invi ) return null;
 return (
   <form>
     <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg flex justify-center items-center ">
       <div className=" artboard phone-1 flex flex-col ">
         <button
           onClick={() => onClose()}
           className="text-white text-xl place-self-end"
         >
           X
         </button>
         <div className="p-2 rounded h-full">
           <div className="flex flex-col gap-4">
             <div>
               <h3 className="text-lg text-primary mb-4 uppercase">
                 Tempo do Pomodoro:
               </h3>
               <TempoPomo max={120} def={30} min={20}/>
             </div>
             <div className="">
               <h3 className="text-lg text-primary mb-4 uppercase">
                 Intervalo Curto:
               </h3>
               <TempoPomo max={30} def={10} min={5} />
             </div>
           </div>
         </div>
       </div>
     </div>
   </form>
 );

}
export default Config;

