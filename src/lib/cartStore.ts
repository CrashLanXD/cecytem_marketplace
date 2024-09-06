import { atom, map } from "nanostores";

export const isCartOpen = atom(false);

export const cartItems = map<Record<string, number>>({});

export function loadCartItems() {
  if (typeof window === "undefined") return;
  const storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
    cartItems.set(JSON.parse(storedCartItems));
  }
}

cartItems.listen((cartItems) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
});

export function addCartItem(id: string) {
  const currentItems = cartItems.get();
  if (!currentItems[id]) {
    cartItems.setKey(id, (currentItems[id] || 0) + 1);
  }
}

export function removeCartItem(id: string) {
  const updatedCartItems = { ...cartItems.get() };
  delete updatedCartItems[id];
  cartItems.set(updatedCartItems);
}

loadCartItems();
