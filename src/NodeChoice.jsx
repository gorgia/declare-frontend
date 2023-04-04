import React, {Component} from "react"
import Button from 'react-bootstrap/Button';
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import BiddingBox from "./BiddingBox";
import OffCanvasBid from "./OffCanvasBid";
import PropTypes from "prop-types";
import {Overlay, Tooltip} from "react-bootstrap";


export default class NodeChoice extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.id = props.id
        this.state = {
            showPopover: false,
            off_canvas_show: false,
            bidObj: props.bidObj,
            bid: props.bid //temporary
        };
    }

    handleAddBid = () => {
        this.props.addBid(this.state.bid.id)
    }


    render() {
        const biddingBox = (
            <Popover id="popover-bidding">
                <Popover.Body>
                    <BiddingBox style={{margin: 0}} show={true}/>
                </Popover.Body>
            </Popover>);

        const biddingBoxPopoverSyle = {
            margin: 0,
            maxWidth: null
        };

        const setOffCanvasShow = (value: boolean) => {
            this.setState({off_canvas_show: value}, () => console.log(this.state.off_canvas_show))
        }
        const handleOffCanvasClose = () => setOffCanvasShow(false);
        const toggleOffCanvasShow = () => {
            setOffCanvasShow(!this.state.off_canvas_show)
        };

        const togglePopover = () => {
            this.setState({'showPopover': !this.state.showPopover})
        }

        const hidePopover =  () => {
            console.log("hidepopover")
            this.setState({'showPopover': false})
        }



        return (
            <div id={this.id}>
                <Button variant='link' className="rounded-circle" size='sm' ref={this.myRef}
                        onClick={ () =>  {
                            console.log("click button pressed")
                            this.setState({'showPopover': true})}}>
                    {this.props.bid.properties.bid_label}
                </Button>
                <OffCanvasBid selectedNodeBid={this.state.bid} show={this.state.off_canvas_show}
                              onHide={() => {this.setState({'off_canvas_show' : false})}}/>
                <Overlay target={this.myRef.current} show={this.state.showPopover}
                         placement="right" rootClose={true} onHide={() => this.setState({'showPopover':false})}>
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            <div className="btn-group-vertical">
                                <Button type="button" className="btn btn-primary" size="sm"
                                        onClick={() => {
                                            this.setState({'showPopover':false})
                                            toggleOffCanvasShow()}}>+</Button>
                                <Button type="button" className="btn btn-primary" size="sm">i</Button>
                                <Button type="button" className="btn btn-primary" size="sm">-</Button>
                                <Button type="button" className="btn btn-primary" size="sm"
                                        onClick={this.handleAddBid}>X</Button>
                            </div>
                        </Tooltip>
                    )}
                </Overlay>
            </div>
        )
    }
}

NodeChoice.propTypes = {
    id: PropTypes.string.isRequired
};


