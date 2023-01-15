import React, { useState } from "react";
import { Modal } from "@nextui-org/react";
import Image from "next/image";

function ModalUniversal() {
  const [visible, setVisible] = useState(true);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <Modal closeButton noPadding width="80%" aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
        <Modal.Body>
          <Image width={1300} height={500} alt="modal image" src="/assets/images/modal.jpeg" />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalUniversal;