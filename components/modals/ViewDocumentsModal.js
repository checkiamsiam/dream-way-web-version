import React from "react";
import { Modal, Text } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { AiFillFileText } from "react-icons/ai";

export default function ViewDocuments({ visibleDocuments, setVisibleDocuments }) {
  const { installmentDataForModal } = useSelector((state) => state.property);
  const closeHandler = () => {
    setVisibleDocuments(false);
  };
  return (
    <>
      <Modal closeButton aria-labelledby="modal-title" open={visibleDocuments} onClose={closeHandler}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            View Documents
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className="h85 w-100 d-flex justify-content-center align-items-center">
            <AiFillFileText style={{ color: "#FF5A5F" }} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
