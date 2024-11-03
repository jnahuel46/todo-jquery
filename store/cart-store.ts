import { StaticImageData } from "next/image";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import pienso_1 from "@/public/pienso_1.jpg";
import pienso_2 from "@/public/pienso_2.jpg";

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
}

interface CartStore {
  products: CartProduct[];
  total: number;
  addProduct: (product: CartProduct) => void;
  removeProduct: (id: number) => void;
  calculateTotal: () => void;
  resetCart: () => void;
}

const initialProducts: CartProduct[] = [
  {
    id: 1,
    name: "Producto 1",
    price: 9.99,
    image: pienso_1,
  },
  {
    id: 2,
    name: "Producto 2",
    price: 19.99,
    image: pienso_2,
  },
];

export const useCartStore = create<CartStore>()(
  devtools((set) => ({
    products: initialProducts,
    total: 0,

    addProduct: (product) =>
      set((state) => ({
        products: [...state.products, product],
      })),

    removeProduct: (id) =>
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
      })),

    calculateTotal: () =>
      set((state) => ({
        total: state.products.reduce((acc, product) => acc + product.price, 0),
      })),
    resetCart: () =>
      set(() => ({
        products: initialProducts,
        total: initialProducts.reduce((acc, product) => acc + product.price, 0),
      })),
  }))
);
