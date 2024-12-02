import { useStore } from "@nanostores/preact";
import { useEffect, useRef } from "preact/hooks";
import { isCartOpen, cartItems, removeCartItem } from "@/lib/cartStore";
import { CartIcon } from "@/components/store/CartFlyoutToggle";
import { PRODUCTS } from "@/constants/products";
import CartFlyoutToggle from "@/components/store/CartFlyoutToggle";
import Checkout from "@/components/store/Checkout";
import PayPalPayment from "@/components/store/PayPalPayment";

const TrashIcon = ({ classList }) => (
  <svg className={classList} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" stroke="none" /><path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /></svg>
);

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);
  const flyoutRef = useRef(null);

  useEffect(() => {
    isCartOpen.set(false);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") isCartOpen.set(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const flyout = flyoutRef.current;
    if (!flyout) return;

    const focusableElements = flyout.querySelectorAll("a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])");
    focusableElements.forEach(el => el.setAttribute("tabindex", $isCartOpen ? "0" : "-1"));

    if ($isCartOpen) flyoutRef.current.focus();
  }, [$isCartOpen]);

  const productLookup = Object.fromEntries(
    PRODUCTS.map((product) => [product.id, product])
  );

  const subtotal = Object.keys($cartItems).reduce((total, id) => {
    const product = productLookup[id];
    return product ? total + product.price : total;
  }, 0);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => isCartOpen.set(false)}
        aria-hidden="true"
        tabIndex={-1}
        className={`fixed inset-0 min-w-full min-h-full z-40 ${
          $isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } bg-black/40 dark:bg-gray-950/50 transition-opacity duration-300 cursor-pointer`}
      ></div>

      {/* Flyout */}
      <aside
        ref={flyoutRef}
        data-open={$isCartOpen}
        id="cart-modal"
        aria-hidden={!$isCartOpen}
        tabindex={$isCartOpen ? "0" : "-1"}
        className={`${
          $isCartOpen
            ? "cart-open !translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none"
        } z-50 fixed right-0 top-0 flex flex-col items-center justify-start transition-transform duration-300 ease-in-out h-full min-h-[100dvh] w-[min(540px,100%)] overflow-y-scroll bg-white dark:bg-neutral-950 md:rounded-l-md text-neutral-900 dark:text-neutral-200 translate-x-[540px] [scrollbar-width:thin`}
      >
        <div className="inline-flex justify-between items-center w-full p-4 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="text-2xl font-semibold tracking-tight">Tu carrito</h2>
          <div className="flex items-center gap-x-2">
            <a href="/store/cart" className={"text-sm underline underline-offset-2"}>ver carrito</a>
            <CartFlyoutToggle closeIcon={true} />
          </div>
        </div>

        {Object.keys($cartItems).length ? (
          <div className="flex flex-col items-center min-w-full justify-center"> 
            {/* Cart Items */}
            <ul className="p-4 min-w-full divide-y divide-neutral-200 dark:divide-neutral-700">
              {Object.keys($cartItems).map((id) => {
                const product = productLookup[id];
                if (!product) return null;
                return (
                  <li key={id} className="flex py-6">
                    <div className="size-28 flex-shrink-0 overflow-hidden rounded-md">
                      <img
                        className="size-full object-cover object-center"
                        src={product.images[0]}
                        alt={product.title}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-neutral-900 dark:text-neutral-100">
                          <h3>{product.title}</h3>
                          <p className="ml-4">${product.price}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-neutral-500">Qty 1</p>

                        <div className="flex">
                          <button
                            title={`Eliminar ${product.title}`}
                            className="text-indigo-400 hover:text-indigo-500 dark:text-neutral-500 dark:hover:text-neutral-400 transition-colors pb-1"
                            onClick={() => removeCartItem(id)}
                          >
                            <TrashIcon classList="size-6" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Subtotal */}
            <div className="flex flex-col items-center border-t !w-full min-w-full border-neutral-200 dark:border-neutral-700 px-4 py-6 sm:px-6">
              <div className="flex justify-between items-center min-w-full text-base font-medium">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm w-full text-neutral-700 dark:text-neutral-200">
                Impuestos y envío calculados al finalizar la compra.
              </p>
              <div className="mt-6 w-full flex flex-col items-center gap-2">
                <Checkout subtotal={subtotal} />
                <PayPalPayment classList={"min-w-full"} />
              </div>
            </div>
          </div>
        ) : (
          <>
            <span className="size-full grid place-items-center">
              <p className="text-center flex flex-col text-lg text-neutral-800 dark:text-neutral-200">
                <CartIcon classList="size-20 mx-auto text-inherit" />
                Tu carrito está vacío!
              </p>
            </span>
          </>
        )}
      </aside>
    </>
  );
}
