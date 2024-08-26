"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Check,
  ChevronDown,
  Store as StoreIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import Button from "./button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./command";
import { Store } from "@/type";
import { useStore } from "@/app/stores/store";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
  selectedStoreParam:Store
}
export default function StoreSwitcher({
  className,
  items,
  selectedStoreParam
}: StoreSwitcherProps) {

  const [open, setOpen] = useState(false);
  const {setSelectedStore} = useStore();

  const formattedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
    id: item.id,
  }));

  const currentStore =  formattedItems.find((item)=> item.id === selectedStoreParam.id)
  const onStoreSelect = (store: Store) => {
    setOpen(false);
    setSelectedStore(store)
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
        
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn("w-[200px] flex items-center rounded-full bg-black px-4 py-2 justify-between", className)}
        >
          <StoreIcon className="mr-2 h-4 w-4"></StoreIcon>
          {currentStore?.label}
          <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50"></ChevronDown>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="SearchStore..."></CommandInput>
            <CommandEmpty> No Store Found</CommandEmpty>
            <CommandGroup heading="Stores">
              {formattedItems.map((store) => (
                <CommandItem
                  key={store.id}
                  onSelect={() => onStoreSelect(store as any)}
                  className="text-sm"
                >
                  <StoreIcon className="mr-2 h-4 w-4" />
                  {store.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      currentStore?.value === store.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
        </Command>
      </PopoverContent>
    </Popover>
  );
}
