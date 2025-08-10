import { useEffect, useState } from "react";
import { Loader } from "lucide-react"
import styles from "./styles.module.css";

export default function AlertModal({
  icon: Icon,
  iconColor,
  title,
  message,
  onClose,
  isOpen,
  isLoading
}) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!visible) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.fadeIn : styles.fadeOut}`}
    >
      <div className={styles.modal}>
        {isLoading ? (
          <Loader className={styles.spinner} />
        ) : (
          Icon && <Icon className={`${styles.icon} ${iconColor}`} />
        )}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  );
}
