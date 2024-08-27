import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IWatchItem } from "types/watchItem";
import { TState } from "store/types";
import { useStore } from "store/store";
import styles from "./watchList.module.css";
import WatchListForm from "components/watchListForm";

export default function AddNewItem() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addWatchItem = useStore((state) => (state as TState).addWatchItem);

  const onCreate = (values: IWatchItem) => {
    const newValues: IWatchItem = { ...values };
    newValues._id = uuidv4();
    addWatchItem(newValues);
    setIsModalOpen(false);
    alert("added successfully");
  };

  return (
    <>
      <button
        className={`button ${styles.floatButton}`}
        onClick={() => setIsModalOpen(true)}
        aria-label="Add item"
      >
        <i className="fas fa-plus" aria-hidden="true"></i>
      </button>
      {isModalOpen && (
        <WatchListForm
          visible={isModalOpen}
          onFinish={onCreate}
          onCancel={() => setIsModalOpen(false)}
          title="Add new item to watchlist"
          okText="Create"
        />
      )}
    </>
  );
}
