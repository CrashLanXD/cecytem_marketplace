const onClick = () => {
  alert("Oh no!, parece que estamos en una DEMO, lo lamento, pero esta función no está disponible en este momento.");
};

export default function Checkout({ subtotal }) {
  return (
    <button
      aria-label={`Checkout - $${subtotal.toFixed(2)}`}
      onClick={onClick}
      class="inline-flex w-full items-center justify-center text-sm font-semibold h-11 px-4 py-2 border-2 border-neutral-800 bg-neutral-800 text-neutral-100 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 relative overflow-hidden before:content[''] before:bg-neutral-700 dark:before:bg-neutral-300 before:absolute before:h-full before:w-[110%] before:-skew-x-[21deg] before:-translate-x-[110%] hover:before:translate-x-0 before:transition-all before:duration-300 after:z-10 after:content-[var(--content)]"
      style={`--content: 'Checkout - $${subtotal.toFixed(2)}';`}
    ></button>
  );
}
