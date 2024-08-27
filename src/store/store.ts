import { create } from "zustand";
import setAddWatchItem from "./actions/setAddWatchItem";
import setEditWatchItem from "./actions/setEditWatchItem";
import setDeleteWatchItem from "./actions/setDeleteWatchItem";
import { getFromStorage } from "utils/index";
import { IWatchItem } from "types/watchItem";
import { TState } from "./types";

export const useStore = create<TState>((set) => ({
  items: (getFromStorage() as IWatchItem[]) ?? [],
  addWatchItem: setAddWatchItem(set),
  editWatchItem: setEditWatchItem(set),
  deleteWatchItem: setDeleteWatchItem(set),
}));
