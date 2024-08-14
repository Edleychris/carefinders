import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const contact = () => {
    navigate("");
  };

  return (
    <main className={styles.main}>
      <div className={styles.textCenter}>
        {/* <FrownOutlined className={styles.icon} /> */}
        <h1 className={`${styles.heading} ${styles.headingSm}`}>
          Page not found
        </h1>
        <p className={styles.paragraph}>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className={styles.buttonContainer}>
          <button
            // type="primary"
            className={styles.primaryButton}
            onClick={handleGoBack}
          >
            Go back
          </button>
          <button
            onClick={contact}
            // type="dashed"
            className={styles.dashedButton}
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
