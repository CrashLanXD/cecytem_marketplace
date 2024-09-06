import { addCartItem, isCartOpen } from "@/lib/cartStore";
import styles from "@/components/AddToCartButton.module.css";

export default function AddToCartForm({ product }) {
  function addToCart(e) {
    e.preventDefault();
    isCartOpen.set(true);
    addCartItem(product.id);
  }

  return (
    <button className={styles["add-to-cart"]} onClick={addToCart}>
      Agregar al carrito
    </button>
  );
}
