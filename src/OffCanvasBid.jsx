import React, {useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import BiddingBox from "./BiddingBox";
import HandDescriptionJsonForm from "./HandDescriptionJsonForm";

const OffCanvasBid = (props) => {

    const [selectedNodeBid, setSelectedNodeBid] = useState(props.selectedNodeBid);

    return (
        <>
            <Offcanvas show={props.show} onHide={props.onHide} placement='end' onExited={props.closepopover}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Bid Creator</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <BiddingBox lastBid={props.selectedNodeBid}/>
                    <HandDescriptionJsonForm />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvasBid;