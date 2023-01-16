import { Modal } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react';

function ModalUniversal() {
    const [visible, setVisible] = useState(true);
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
    };

    return (
        <>
            <Modal
                closeButton
                noPadding
                width="80%"
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                style={{
                    background: ` linear-gradient(to bottom, #4bcaf5, #ffffff) `,
                }}
            >
                <Modal.Body
                    style={{
                        height: '100%',
                    }}
                >
                    {/* <div className="d-flex justify-content-center"> */}
                    <Image
                        width={1300}
                        height={500}
                        style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                        alt="modal image"
                        src="/assets/images/modal.jpeg"
                    />
                    {/* </div> */}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalUniversal;
