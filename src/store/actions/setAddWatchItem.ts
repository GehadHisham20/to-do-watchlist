import { TSet, TState } from "../types";
import { IWatchItem } from "types/watchItem";
import { addToStorage } from "utils/storage/addToStorage";

/**
 * Adds a item to the state and updates the storage.
 *
 * @param set - The function to update the state.
 * @param item - The item to be added.
 * @returns The updated state with the new item added.
 */

export default (set: TSet) => (item: IWatchItem) =>
  set((state: TState) => {
    const newItems: IWatchItem[] = [...state.items, item];
    addToStorage(newItems);
    return { items: newItems };
  });
