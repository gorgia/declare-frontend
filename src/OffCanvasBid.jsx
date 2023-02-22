import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BiddingBox from "./BiddingBox";
import HandDescriptionJsonForm from "./HandDescriptionJsonForm";

const OffCanvasBid = (props) => {

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Bid Creator</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <BiddingBox />
                    <HandDescriptionJsonForm />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasBid;