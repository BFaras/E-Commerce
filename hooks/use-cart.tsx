"use client"
import 
{ Product } from "@/type";
import toast from "react-hot-toast";
import { create} from "zustand"
import {persist,createJSONStorage} from "zustand/middleware"
interface CartStore {
    items?: Product[];
    addItem: (data: Product) => void;
    removeItem: (id:string) => void;
    removeAll:()=>void

}

export const useCart = create(
    persist<CartStore>((set,get) => ({
    items: [],
    addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems?.find((item: Product) => item.id === data.id );

        if (existingItem) {
            return toast("Item already in cart")
        }
        set({items: [...get().items!,data]});
        toast.success("Item added to cart")
    },
    removeItem: (id:string) => {
        set({items:[...get().items!.filter((item:Product) => item.id !== id)]});
        toast.success("Item removed from teh cart");
    },
    removeAll: () => set({items: []}),
}),{
    name: "cartStore",
    storage: createJSONStorage(() => localStorage)
})
)