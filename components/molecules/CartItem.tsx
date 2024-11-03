import React from "react";
import Image from "next/image";
import { CartProduct } from "@/store/cart-store";
import { Button } from "../atoms/Button";

interface CartItemProps {
  product: CartProduct;
  removeProduct: (id: number) => void;
}

export const CartItem = ({ product, removeProduct }: CartItemProps) => {
  return (
    <div key={product.id} className="flex items-center py-4 px-6">
      <Image
        className="w-16 h-16 object-cover rounded"
        src={product.image}
        alt={`Imagen de ${product.name}`}
      />
      <div className="ml-3 mr-12">
        <h3 className="text-customGrey font-semibold">{product.name}</h3>
        <p className="text-customGrey mt-1">${product.price.toFixed(2)}</p>
      </div>
      <Button
        title="Eliminar"
        onClick={() => removeProduct(product.id)}
        customHeight="h-[30px]"
      />
    </div>
  );
};
