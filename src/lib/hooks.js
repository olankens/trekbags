import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "The useItemsContext hook must be used within an ItemsContextProvider!"
    );
  }

  return context;
}
