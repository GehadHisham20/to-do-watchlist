import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IWatchItem } from "types/watchItem";
import { TState } from "store/types";
import styles from "./home.module.css";
import { useStore } from "store/store";
import { TvShow } from ".";
import WatchListForm from "components/watchListForm";
import { isAuthenticated } from "utils/index";
import { useNavigate } from "react-router-dom";

export default function AddToWatchList({ data }: { data: TvShow }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addWatchItem = useStore((state) => (state as TState).addWatchItem);
  const navigate = useNavigate();

  const onCreate = (values: IWatchItem) => {
    const newValues: IWatchItem = { ...values };
    newValues._id = uuidv4();
    addWatchItem(newValues);
    setIsModalOpen(false);
    alert("added successfully");
  };

  function handleOnCLick() {
    if (!isAuthenticated()) {
      navigate("/register");
      return;
    }
    setIsModalOpen(true);
  }

  return (
    <>
      <div className={styles.heart} onClick={handleOnCLick}>
        <i className="fa-solid fa-heart"></i>
      </div>
      {isModalOpen && (
        <WatchListForm
          visible={isModalOpen}
          onFinish={onCreate}
          onCancel={() => setIsModalOpen(false)}
          title="Add to your watchlist"
          okText="Add"
          initialValues={{
            _id: data.id,
            title: data.name,
            description: "",
            completed: false,
          }}
        />
      )}
    </>
  );
}
