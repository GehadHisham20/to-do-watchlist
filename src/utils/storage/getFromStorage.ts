import { IWatchItem } from "types/watchItem";

/**
 * Retrieves data from the storage.
 *
 * @returns The data retrieved from the storage, or an empty array if no data is found.
 */
export function getFromStorage(key: string = "items"): IWatchItem[] | string {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return [];
}
