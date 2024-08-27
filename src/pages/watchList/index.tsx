import { useEffect, useState } from "react";
import { IWatchItem } from "types/watchItem";
import { useStore } from "store/store";
import { TState } from "store/types";
import styles from "./watchList.module.css";
import ItemCard from "./watchItemCard";
import AddNewItem from "./addBtn";
import Filter from "./filter";

export default function WatchList() {
  const [data, setData] = useState<IWatchItem[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const items = useStore((state) => (state as TState).items);

  useEffect(() => {
    let filtered = [...items];

    // Filter
    if (selectedStatus !== "all") {
      filtered = filtered.filter((one) => {
        const booleanValue = selectedStatus === "true" ? true : false;
        return one.completed === booleanValue;
      });
    }

    setData(filtered);
  }, [items, selectedStatus]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.filters}>
          <Filter setSelectedStatus={setSelectedStatus} />
        </div>

        <div className="row">
          {data.map((one: IWatchItem) => (
            <div key={one._id} className="col">
              <ItemCard data={one} />
            </div>
          ))}
        </div>
      </div>
      <AddNewItem />
    </>
  );
}
