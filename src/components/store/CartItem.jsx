import { removeCartItem } from "@/lib/cartStore";
import { CloseIcon } from "@/components/store/CartFlyoutToggle.jsx";

export default function CartItem({ product }) {
  return (
    <li className={"flex py-6 gap-4 text-lg w-full"}>
      <div className="size-52 flex-shrink-0 overflow-hidden rounded-md">
        <img
          className="size-full object-cover object-center"
          src={product.images[0]}
          alt={product.title}
          loading={"eager"}
          decoding={"async"}
        />
      </div>
      <div class={"flex flex-col justify-center max-h-fit"}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <p className="text-neutral-500 text-base">Qty 1</p>
      </div>
      <div class={"flex flex-col justify-start items-center ml-auto"}>
        <button
          title={`Eliminar ${product.title}`}
          className="text-indigo-400 hover:text-indigo-500 dark:text-neutral-500 dark:hover:text-neutral-400 transition-colors pb-1 max-w-fit max-h-fit"
          onClick={() => removeCartItem(product.id)}
        >
          <CloseIcon />
        </button>
      </div>
    </li>
  );
}
