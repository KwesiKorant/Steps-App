import { useState } from "react";

function DateCounter() {
  const [count, setCount] = useState(0);
  const [stepper, setStepper] = useState(1);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);

  return (
    <>
      <div className="grid grid-rows-3 mx-auto mt-20 max-w-lg gap-6 rounded-xl p-6 shadow-xl bg-linear-to-t from-olive-50 to-olive-200">
        <div className="flex w-50 h-4 mx-auto relative justify-evenly items-center bg-linear-to-r from-blue-300 to-indigo-400 rounded-full">
          <StepView stepper={stepper} setStepper={setStepper} />
        </div>

        <div className="flex w-50 h-4 mx-auto relative justify-evenly items-center bg-linear-to-r from-blue-300 to-indigo-400 rounded-full">
          <CountView stepper={stepper} count={count} setCount={setCount} />
        </div>

        <div className="bg-linear-to-tl from-neutral-400 to-olive-800 p-2 rounded-xl shadow-md text-center text-white font-bold">
          <span className="font-light font-mono">
            {count === 0
              ? "Today is"
              : count === 1
                ? "Tomorrow is"
                : count > 1
                  ? `${count} days from now will be`
                  : count === -1
                    ? "Yesterday was"
                    : `${Math.abs(count)} days ago was`}
          </span>
          <span> {currentDate.toDateString()} </span>
        </div>
      </div>
    </>
  );
}

function StepView({ stepper, setStepper }) {
  return (
    <>
      <button
        onClick={() => setStepper((s) => s - 1)}
        className={`absolute flex justify-center items-end left-3 bg-olive-100 w-7 h-7 rounded-full shadow-lg text-4xl`}
      >
        -
      </button>
      <span
        className={`absolute bg-olive-100 text-center py-0.5 w-25 h-8 rounded-lg shadow-lg font-bold`}
      >
        Step: {stepper}
      </span>
      <button
        onClick={() => setStepper((s) => s + 1)}
        className={`absolute flex justify-center items-end bg-olive-100 right-3 w-7 h-7 rounded-full shadow-lg  text-3xl`}
      >
        +
      </button>
    </>
  );
}

function CountView({stepper, count, setCount }) {
  return (
    <>
      <button
        onClick={() => setCount((c) => c - stepper)}
        className={`absolute flex justify-center items-end left-3 bg-olive-100 w-7 h-7 rounded-full shadow-lg text-4xl`}
      >
        -
      </button>
      <span
        className={`absolute bg-olive-100 text-center py-0.5 w-25 h-8 rounded-lg shadow-lg font-bold`}
      >
        Count: {count}
      </span>
      <button
        onClick={() => setCount((c) => c + stepper)}
        className={`absolute flex justify-center items-end bg-olive-100 right-3 w-7 h-7 rounded-full shadow-lg text-center text-3xl`}
      >
        +
      </button>
    </>
  );
}

export default DateCounter;
