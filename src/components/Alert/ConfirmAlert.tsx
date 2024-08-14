import { useEffect } from "react";
import { useAlert } from "../../context/AlertContext";
import smile from "../../assets/error.png";
import Alert from ".";

type SuccessAlertProps = {
  autoClose?: boolean;
};

const ConfirmAlert: React.FC<SuccessAlertProps> = ({ autoClose = true }) => {
  const { alerts, hideAlert } = useAlert();

  useEffect(() => {
    if (autoClose && alerts.length > 0) {
      const timer = setTimeout(() => {
        hideAlert();
      }, 3000); // Auto-close the alert after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [autoClose, alerts, hideAlert]);

  const handleProceed = () => {
    //@ts-ignore
    alerts?.[0]?.onProceed();
    hideAlert();
  };

  return alerts.length > 0 && alerts[0].type === "confirm" ? (
    <Alert
      isVisible={alerts.length > 0}
      title="Alert"
      content={
        <div className="alert">
          <div className="alertImg">
            <img src={smile} alt="smile emoji" />
          </div>
          <div className="text">
            <h1>{alerts?.[0].title}</h1>
            <p>{alerts?.[0]?.text}</p>
            <span>{alerts?.[0]?.subText}</span>
            <div className="btnContainer">
              <button
                className="btn btnBlack"
                type="button"
                onClick={hideAlert}
              >
                Cancel
              </button>
              &nbsp; &nbsp;
              <button
                className="btn btnSuccess"
                type="button"
                onClick={handleProceed}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      }
      onClose={hideAlert}
    />
  ) : null; // Return null for cases where the alert should not be rendered
};

export default ConfirmAlert;
