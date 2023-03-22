

const Config = ({ invi, onClose, children }) => {
 if ( !invi ) return null;
 return (
   <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
     <div className=" artboard phone-1 flex flex-col ">
       <button
           onClick={ () => onClose()}
           className="text-white text-xl place-self-end">X</button>
       <div className="p-2 rounded h-full">{children}</div>
     </div>
   </div>
 );

}
export default Config;

