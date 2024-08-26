"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import StoreSwitcher from "./ui/store-switch";
import { Store } from "@/type";
import { useStore } from "../app/stores/store";
interface NavBarActions {
  data: Store[];
}

export default function NavbarActions({data}:NavBarActions) {
  const [isMounted, setIsMounted] = useState(false);
  const {selectedStore,setSelectedStore} = useStore();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!selectedStore && data.length > 0) {
      const randomStore = data[Math.floor(Math.random() * data.length)];
      setSelectedStore(randomStore);
    }
  }, [selectedStore, data, setSelectedStore]);
  
  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <StoreSwitcher selectedStoreParam = {selectedStore!} items={data}></StoreSwitcher>
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart?.items?.length || 0}
        </span>
      </Button>
    </div>
  );
}
