import React, { Fragment } from "react";

import { Button } from "../Button/Button.component";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./Modal.component";

const EditTicketModal = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            <Button
                type="button"
                onClick={toggle}
                className={"buttonVariable success-btn"}
            >
                Edit
            </Button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>Edit Ticket</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </ModalBody>
                <ModalFooter>
                    <button
                        onClick={toggle}
                        className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-red-500"
                    >
                        Close
                    </button>
                    <button
                        onClick={toggle}
                        className="text-white focus:outline-none m-1.5 rounded px-6 py-2 font-medium bg-blue-600"
                    >
                        Confirm
                    </button>
                </ModalFooter>
            </Modal>
        </Fragment>
    );
};

export default EditTicketModal;
