import { Modal, Button, Text } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function InstallmentModal({ bindings }) {
  const { installmentDataForModal } = useSelector((state) => state.property);
  return (
    <>
      <Modal scroll closeButton width="600px" aria-labelledby="modal-title" aria-describedby="modal-description" {...bindings}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Installment for {installmentDataForModal?.property?.title}
          </Text>
        </Modal.Header>
        <Modal.Body>
          {installmentDataForModal?.installments?.map((installment) => (
            <>
              <div>
                <p>
                  <span className="font-weight-bold">Installment No :</span> <span>{installment?.installment_no}</span>
                </p>
                <p>
                  <span className="font-weight-bold">Date And Time :</span> <span>{installment?.date}</span>
                </p>
                <p>
                  <span className="font-weight-bold">Amount :</span> <span>{installment?.ammount}</span>
                </p>
                <p>
                  <span className="font-weight-bold">Payment Method :</span> <span>{installment?.pay_by}</span>
                </p>
                <p>
                  <span className="font-weight-bold">Comments :</span> <span>{installment?.comments}</span>
                </p>
                <hr />
              </div>
            </>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
