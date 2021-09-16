import React, { useState, Fragment } from "react";

import { Button } from "../Button/Button.component";
import AddTicketModal from "../Modal/AddTicket.modal";
import EditTicketModal from "../Modal/EditTicket.modal";

const FloatingButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Fragment>
            <div className="fixed bottom-10 right-10">
                {isOpen && (
                    <Fragment>
                        <EditTicketModal />
                        <AddTicketModal />
                    </Fragment>
                )}
                <Button
                    type="button"
                    onClick={toggle}
                    className={"buttonVariable primary-btn"}
                >
                    click me!
                </Button>
                {
                    // <div className="fixed bottom-10 right-10">
                    //     <Button className={"buttonVariable primary-btn"} text={"+"} />
                    // </div>
                }
            </div>
        </Fragment>
    );
};

export default FloatingButton;
