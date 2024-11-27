// CartComponent.jsx
import { useEffect, useState } from "preact/hooks";
import { useStore } from "@nanostores/preact";
import { cartItems } from "@/lib/cartStore";
import { PRODUCTS } from "@/constants/products";
import CartItem from "@/components/store/CartItem.jsx";
import PayPalPayment from "@/components/store/PayPalPayment.jsx";
import Checkout from "@/components/store/Checkout.jsx";
import { CartIcon } from "@/components/store/CartFlyoutToggle.jsx";

export default function CartComponent() {
  const [productsInCart, setProductsInCart] = useState([]);
  const $cartItems = useStore(cartItems);

  useEffect(() => {
    const productLookup = Object.fromEntries(
      PRODUCTS.map((product) => [product.id, product])
    );
    const items = Object.keys($cartItems)
      .map((id) => productLookup[id])
      .filter(Boolean);
    setProductsInCart(items);
  }, [$cartItems]);

  const subtotal = productsInCart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div class={"flex flex-col lg:flex-row"}>
      {productsInCart.length > 0 ? (
        <>
          <ul class="divide-y divide-neutral-400 dark:divide-neutral-200 w-full max-w-screen-md">
            {productsInCart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
          <div class="px-4 py-6 max-w-sm border border-neutral-400 mx-auto w-full h-fit max-h-fit sticky top-24">
            <h2 class="text-xl font-semibold">Resumen de pedido</h2>
            <hr class={"border-neutral-400 my-4"} />
            <p class="mb-2 text-sm">
              Impuestos y envío calculados al finalizar la compra.
            </p>
            <div class="flex justify-between items-center text-lg font-semibold my-4">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)} MXN</p>
            </div>
            <Checkout subtotal={subtotal} />
            <PayPalPayment classList={"mt-2 w-full"} />
          </div>
        </>
      ) : (
        <div class={"py-6 mx-auto w-full"}>
          <span className="size-full grid place-items-center">
            <p className="text-center flex flex-col text-lg text-neutral-800 dark:text-neutral-200">
              <CartIcon classList="size-20 mx-auto text-inherit" />
              Tu carrito está vacío!
            </p>
          </span>
        </div>
      )}
    </div>
  );
}
