import { useState } from "react";
import styles from "./watchList.module.css";
import { IWatchItem } from "types/watchItem";
import { useStore } from "store/store";
import Modal from "components/modal/Modal";
import WatchListForm from "components/watchListForm";

interface IWatchItemCardProps {
  data: IWatchItem;
}

export default function ItemCard({ data }: IWatchItemCardProps) {
  const deleteWatchItem = useStore((state) => state.deleteWatchItem);
  const editWatchItem = useStore((state) => state.editWatchItem);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState<IWatchItem | null>(
    null
  );
  const [isCompleted, setIsCompleted] = useState(data.completed);

  const onEdit = (values: IWatchItem) => {
    editWatchItem(data._id, { ...values, completed: isCompleted });
    setIsModalOpen(false);
  };

  const handleCheckboxChange = () => {
    setIsCompleted((prev) => !prev);
    editWatchItem(data._id, { ...data, completed: !isCompleted });
  };

  return (
    <>
      <div className="card">
        <h4 className={styles.cardHeader}>
          {data.title.length > 30
            ? data.title.substring(0, 30) + " ..."
            : data.title}
        </h4>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleCheckboxChange}
            id={`checkbox-${data._id}`}
          />
          <label htmlFor={`checkbox-${data._id}`} className="checkboxField">
            Completed
          </label>
        </div>
        <div className={styles.cardContent}>
          <p>
            {data.description.length > 30
              ? data.description.substring(0, 30) + " ..."
              : data.description}
          </p>
        </div>
        <div className={styles.cardActions}>
          <i
            className={`fas fa-eye ${styles.iconButton}`}
            title="View"
            onClick={() => setIsViewModalOpen(data)}
          ></i>

          <i
            title="Edit"
            className={`fas fa-edit ${styles.iconButton}`}
            onClick={() => setIsModalOpen(true)}
          ></i>

          <i
            title="Delete"
            className={`fas fa-trash-alt ${styles.iconButton} ${styles.deleteButton} `}
            onClick={() => deleteWatchItem(data._id)}
          ></i>
        </div>
      </div>
      {isModalOpen && (
        <WatchListForm
          visible={isModalOpen}
          onFinish={onEdit}
          onCancel={() => setIsModalOpen(false)}
          title="Edit"
          okText="Edit"
          initialValues={data}
        />
      )}
      <Modal
        visible={!!isViewModalOpen}
        onCancel={() => setIsViewModalOpen(null)}
        onOk={() => setIsViewModalOpen(null)}
        title={isViewModalOpen?.title ?? ""}
        okText={"ok"}
      >
        <div>{isViewModalOpen?.description}</div>
      </Modal>
    </>
  );
}
