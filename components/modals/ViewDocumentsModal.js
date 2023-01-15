import React from "react";
import { Modal,  Text } from "@nextui-org/react";

export default function ViewDocuments({visibleDocuments, setVisibleDocuments}) {
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
          sdfsdf
        </Modal.Body>
      </Modal>
    </>
  );
}
