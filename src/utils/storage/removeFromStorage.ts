/**
 * Removes an item from the local storage based on the provided key.
 *
 * @param key - The key of the item to be removed from the local storage.
 */
export function removeFromStorage(key: string) {
  localStorage.removeItem(key);
}
