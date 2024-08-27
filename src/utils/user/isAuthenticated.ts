import { getFromStorage } from "utils/index";

/**
 * Checks if the user is authenticated.
 *
 * @returns {boolean} The user authentication status. Returns the user object if authenticated, otherwise returns null.
 */
export function isAuthenticated(): boolean {
  const isAuth = getFromStorage("user");
  if (!isAuth || isAuth.length === 0) return false;
  return true;
}
