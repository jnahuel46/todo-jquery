import React, { useEffect } from "react";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "../molecules/CartItem";
import { Button } from "../atoms/Button";
import ModalLayout from "../layouts/ModalLayout";
import $ from "jquery";
import { ChallengueModal } from "./ChallengueModal";

export const Cart = () => {
  const { products, total, removeProduct, calculateTotal, resetCart } =
    useCartStore();

  useEffect(() => {
    calculateTotal();
  }, [products, calculateTotal]);

  const handlePaymentClick = () => {
    $("#paymentModal").css("display", "flex"); 
  };

  const closeModal = () => {
    $("#paymentModal").css("display", "none");
  };

  return (
    <ModalLayout>
      <div
        className="bg-white rounded shadow-lg max-w-md mx-auto dark:bg-gray-800 dark:text-neutral100"
      >
        <div className="px-4 py-2 border-b border-gray-200 dark:border-neutral100">
          <h2 className="font-semibold text-customGrey dark:text-neutral100">Carrito de Compras</h2>
        </div>
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-neutral100">
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeProduct={removeProduct}
            />
          ))}
        </div>
        <div className="flex items-center justify-between px-6 py-3 bg-gray-100 gap-2 dark:bg-customBackground">
          <h3 className="text-customGrey dark:text-neutral100 font-semibold">
            Total: ${total.toFixed(2)}
          </h3>
          <Button title="Reset" onClick={resetCart} customHeight="h-[30px]" />
          <Button
            title="Pagar"
            onClick={() => {
              handlePaymentClick();
            }}
            customHeight="h-[30px]"
          />
        </div>
      </div>
      <ChallengueModal closeModal={closeModal} />
    </ModalLayout>
  );
};
