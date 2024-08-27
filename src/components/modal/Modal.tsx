import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
  title: string;
  children: React.ReactNode;
  okText: string;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onCancel,
  onOk,
  title,
  children,
  okText,
}) => {
  if (!visible) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>{title}</div>

          <i
            className="fa-solid fa-xmark"
            style={{ cursor: "pointer" }}
            onClick={onCancel}
          ></i>
        </div>
        <div className={styles.modalBody}>{children}</div>
        <div className={styles.modalFooter}>
          <button className="button" onClick={onOk}>
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
