import React, { useEffect, useRef } from "react";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "../molecules/CartItem";
import { Button } from "../atoms/Button";
import ModalLayout from "../layouts/ModalLayout";

interface CartProps {
  onClose: () => void;
  iconRef: React.RefObject<HTMLDivElement>; // Referencia al ícono del carrito
}

export const Cart = ({ onClose, iconRef }: CartProps) => {
  const { products, total, removeProduct, calculateTotal, resetCart } = useCartStore();
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    calculateTotal();
  }, [products, calculateTotal]);

  const handleClickOutside = (event: MouseEvent) => {
    // Verificar si el clic fue fuera del modal y fuera del icono del carrito
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ModalLayout>
      <div ref={modalContentRef} className="bg-white rounded shadow-lg max-w-md mx-auto">
        <div className="px-4 py-2 border-b border-gray-200">
          <h2 className="font-semibold text-customGrey">Carrito de Compras</h2>
        </div>
        <div className="flex flex-col divide-y divide-gray-200">
          {products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              removeProduct={removeProduct}
            />
          ))}
        </div>
        <div className="flex items-center justify-between px-6 py-3 bg-gray-100 gap-2">
          <h3 className="text-customGrey font-semibold">
            Total: ${total.toFixed(2)}
          </h3>
          <Button title="Reset" onClick={resetCart} customHeight="h-[30px]" />
          <Button title="Pagar" onClick={onClose} customHeight="h-[30px]" />
        </div>
      </div>
    </ModalLayout>
  );
};
