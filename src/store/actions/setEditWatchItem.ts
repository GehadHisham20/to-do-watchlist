import { TSet, TState } from "../types";
import { IWatchItem } from "types/watchItem";
import { addToStorage } from "utils/storage/addToStorage";

/**
 * Updates a item in the state and storage.
 *
 * @param set - A function to update the state.
 * @param id - The ID of the item to be updated.
 * @param item - The updated item object.
 * @returns An object containing the updated items.
 */
export default (set: TSet) => (id: string, item: IWatchItem) =>
  set((state: TState) => {
    const items = state.items.map((one: IWatchItem) => {
      if (one._id === id) {
        return item;
      }
      return one;
    });
    addToStorage(items);
    return { items };
  });
