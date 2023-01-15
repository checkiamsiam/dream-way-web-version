import { Modal, Button, Text } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function InstallmentModal({ bindings }) {
  const { installmentDataForModal: property } = useSelector((state) => state.property);
  return (
    <>
      <Modal scroll closeButton width="600px" aria-labelledby="modal-title" aria-describedby="modal-description" {...bindings}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Installment for {property?.property?.title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          {property?.installments.map((installment) => (
            <>
              <div>
                <p>
                  <span>Installment No</span>: <span>{installment?.installment_no}</span>
                </p>
                <p>
                  <span>Date And Time</span>: <span>{installment?.date}</span>
                </p>
                <p>
                  <span>Amount</span>: <span>{installment?.ammount}</span>
                </p>
                <p>
                  <span>Payment Method</span>: <span>{installment?.pay_by}</span>
                </p>
                <p>
                  <span>Comments</span>: <span>{installment?.comments}</span>
                </p>
              </div>
              <hr />
            </>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
