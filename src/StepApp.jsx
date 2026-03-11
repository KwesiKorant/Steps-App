import { useState } from "react";

const messages = [
  "Hola! Hola! Learning React ✌",
  "learning curve relatively good 🎻",
  "since I started, I will have to finish 😎",
];

function StepApp() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsopen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      {/* close button */}
      <div className="absolute hover:scale-150 size-7 left-125 md:top-8 md:left-160 lg:left-235">
        {" "}
        <img
          className=" p-1 rounded-full bg-linear-to-tl from-neutral-200 to-indigo-500"
          onClick={() => setIsopen(!isOpen)}
          src="src/assets/cancel.svg"
          alt="cancel"
        />{" "}
      </div>

      {isOpen && (
        <div className="grid grid-rows-3 mx-auto mt-10 max-w-sm gap-10 rounded-xl p-5 shadow-xl bg-linear-to-t from-olive-50 to-olive-200 ">
          <div className="flex relative justify-around items-center bg-linear-to-r from-blue-300 to-indigo-400 rounded-full">
            <span
              className={`absolute left-10 px-3.5 py-2 w-10 h-10 rounded-full shadow-lg ${step >= 1 ? "bg-blue-400" : "bg-oilive-100"} `}
            >
              1
            </span>
            <span
              className={`absolute  px-3.5 py-2 w-10 h-10 rounded-full shadow-lg ${step >= 2 ? "bg-linear-to-r from-blue-300 to-indigo-400" : "bg-olive-100"} `}
            >
              2
            </span>
            <span
              className={`absolute right-10 px-3.5 py-2 w-10 h-10 rounded-full shadow-lg ${step >= 3 ? "bg-indigo-400" : "bg-olive-100"}`}
            >
              3
            </span>
          </div>

          <div className="relative flex justify-center text-center">
            <p className="absolute font-bold text-xl"> {messages[step - 1]} </p>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              className="hover:shadow-lg  rounded-full px-1.5 py-0.5 text-white  bg-linear-to-r from-blue-300 to-neutral-200"
            >
              previous
            </button>
            <button
              onClick={handleNext}
              className="hover:shadow-lg  rounded-full px-1.5 py-0.5 text-white  bg-linear-to-tr from-neutral-200 to-indigo-400"
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default StepApp;
