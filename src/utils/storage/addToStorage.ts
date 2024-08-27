/**
 *
 * @param {any} data - The items or user data to be added to the local storage.
 * @param {string} [key='items'] - The key under which the data will be stored in the local storage.
 * @returns {void}
 */
export function addToStorage(data: any, key: string = "items"): void {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
}
