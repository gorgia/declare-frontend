import React, {Component} from "react"
import Button from 'react-bootstrap/Button';
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import BiddingBox from "./BiddingBox";
import OffCanvasBid from "./OffCanvasBid";
import PropTypes from "prop-types";


export default class NodeChoice extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.id = props.id
        this.state = {
            showPopover: props.show,
            off_canvas_show: false,
            bidObj: props.bidObj,
            bid: props.bid //temporary
        };
    }

    handleAddBid = () => {
        this.props.addBid(this.state.bidObj.attributes.bidid)
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
            console.log("setOffCanvasShow called:  off_canvas_show_status:" + this.state.off_canvas_show)
            this.setState({off_canvas_show: value}, () => console.log(this.state.off_canvas_show))
        }
        const handleOffCanvasClose = () => setOffCanvasShow(false);
        const toggleOffCanvasShow = () => {
            setOffCanvasShow(!this.state.off_canvas_show)
        };

        const setShowPopover = () => {
            this.setState({'show': !this.state.show})
        }


        const chooseAction = (
            <Popover id="popover-basic">
                <Popover.Body>
                    <div className="btn-group-vertical">
                        <Button type="button" className="btn btn-primary" size="sm"
                                onClick={toggleOffCanvasShow}>+</Button>
                        <OffCanvasBid selectedNodeBid={this.state.bid} show={this.state.off_canvas_show}
                                      onHide={handleOffCanvasClose}
                                      closepopover={() => this.setState({showPopover: false})}/>
                        <Button type="button" className="btn btn-primary" size="sm">i</Button>
                        <Button type="button" className="btn btn-primary" size="sm">-</Button>
                        <Button type="button" className="btn btn-primary" size="sm"
                                onClick={this.handleAddBid}>X</Button>
                    </div>
                </Popover.Body>
            </Popover>
        );

        return (
            <div id={this.id}>
                <OverlayTrigger trigger={'click'} placement="right" overlay={chooseAction}
                                show={this.state.showPopover}>
                    <Button variant='link' className="rounded-circle" size='sm'
                            onClick={() => this.setState({'showPopover': true})}>+</Button>
                </OverlayTrigger>
            </div>
        )
    }
}

NodeChoice.propTypes = {
    id: PropTypes.string.isRequired
};


