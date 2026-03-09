function App() {
  return (
    <>
      <div className="grid grid-rows-3 mx-auto mt-40 max-w-sm gap-5 rounded-xl p-5 shadow-xl bg-linear-to-t from-olive-50 to-olive-200 ">

        <div className="flex relative justify-around items-center bg-linear-to-r from-blue-300 to-indigo-400 rounded-full " >          
          <span className=" absolute left-10 hover:bg-blue-300 bg-olive-100 px-3.5 py-2 w-10 h-10 rounded-full shadow-lg">1</span>
          <span className=" absolute hover:bg-linear-to-r from-blue-300 to-indigo-400 bg-olive-100 px-3.5 py-2 w-10 h-10 rounded-full shadow-lg ">2</span>
          <span className="absolute right-10 hover:bg-indigo-400 to-indigo-400 bg-olive-100 px-3.5 py-2 w-10 h-10 rounded-full shadow-lg ">3</span>
        </div>

        <p className="flex justify-center items-center font-bold text-xl">Step 1: Hola</p>

        <div className="flex justify-between items-center">
        <button className="hover:shadow-lg  rounded-lg px-1.5 py-0.5 text-white  bg-linear-to-r from-blue-300 to-neutral-200">
          previous
        </button>
        <button className="hover:shadow-lg  rounded-lg px-1.5 py-0.5 text-white  bg-linear-to-tr from-neutral-200 to-indigo-400">
          next
        </button>
        </div>
        
      </div>
    </>
  );
}

export default App;
