import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import { FC } from "react";

interface ModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  width: string;
  children: JSX.Element;
}

export const ModalPopup: FC<ModalProps> = ({
  show,
  setShow,
  width,
  children,
}): JSX.Element => {
  return (
    <Popup
      position="bottom center"
      modal
      open={show}
      on="click"
      onOpen={() => setShow(true)}
      onClose={() => {
        setShow(false);
      }}
      closeOnDocumentClick={false}
      lockScroll={true}
      overlayStyle={{
        overflowY: "auto",
        paddingTop: "2%",
        paddingBottom: "2%",
      }}
      contentStyle={{
        width: width,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        padding: "16px",
        border: "none",
        overflow: "auto",
      }}
    >
      {children}
    </Popup>
  );
};
