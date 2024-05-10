import { useState } from 'preact/hooks'

export function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <span class="text-2xl text-yellow-300">{counter}</span>
      <button class="border px-4 py-2 text-2xl" onClick={() => setCounter(counter => counter + 1)}>+</button>
      <button class="border px-4 py-2 text-2xl" onClick={() => setCounter(counter => counter - 1)}>-</button>
    </>
  );
}