import React, {Component, useRef} from "react"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {Overlay} from "react-bootstrap";



export default class NodeChoice extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef().current;
        this.state = {
            show: props.show
        };
    }



    render() {
        const popover = (
            <Popover id="popover-basic" >
                <Popover.Body>
                    <div className="btn-group-vertical">
                        <Button type="button" className="btn btn-primary">+</Button>
                        <Button type="button" className="btn btn-primary">i</Button>
                        <Button type="button" className="btn btn-primary">-</Button>
                        <Button type="button" className="btn btn-primary">X</Button>
                    </div>
                </Popover.Body>
            </Popover>
        )

        return (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button variant="success">Hover me to see</Button>
            </OverlayTrigger>
        )
    }
}
