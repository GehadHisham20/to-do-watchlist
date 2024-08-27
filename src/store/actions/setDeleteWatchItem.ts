import { addToStorage } from "utils/storage/addToStorage";
import { IWatchItem } from "types/watchItem";
import { TSet, TState } from "../types";

/**
 * Deletes a item from the state based on the given ID.
 *
 * @param set - The function used to update the state.
 * @param id - The ID of the items to be deleted.
 */
export default (set: TSet) => (id: string) => {
  set((state: TState) => {
    const filterd: IWatchItem[] = state.items.filter((one) => one._id !== id);
    addToStorage(filterd);
    return {
      items: filterd,
    };
  });
};
