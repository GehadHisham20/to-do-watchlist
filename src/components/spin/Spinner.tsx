import styles from "./spinner.module.css";
export default function Spinner() {
  return (
    <div className={styles.spinnerWrapper}>
      <i className="fa-solid fa-circle-notch fa-spin fa-2x"></i>
    </div>
  );
}
