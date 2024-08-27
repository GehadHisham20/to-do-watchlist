import { IWatchItem } from "types/watchItem";
export type TSet = (fn: (state: TState) => { items: IWatchItem[] }) => void;

export type TState = {
  items: IWatchItem[] | [];
  addWatchItem: (item: IWatchItem) => void;
  editWatchItem: (itemId: string, updatedWatchItem: IWatchItem) => void;
  deleteWatchItem: (itemId: string) => void;
};
