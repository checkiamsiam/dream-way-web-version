import React from "react";
import { Modal, Text } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { AiFillFileText } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

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
          <div style={{ backgroundColor: "#E9EBEC" }}>
            <div className="h85 w-100 d-flex justify-content-center align-items-center">
              <AiFillFileText style={{ color: "#FF5A5F", fontSize: "40px" }} />
            </div>
            <div className="d-flex justify-content-right">
              <a href="https://dreamwayapi.sajidurapp.xyz/" className="p-1" style={{ backgroundColor: "white" }}>
                <FaDownload style={{ color: "#FF5A5F" }} />
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
