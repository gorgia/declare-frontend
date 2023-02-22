import React, {Component} from "react"
import Button from 'react-bootstrap/Button';
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import BiddingBox from "./BiddingBox";
import OffCanvasBid from "./OffCanvasBid";


export default class NodeChoice extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            show: props.show,
            off_canvas_show : false
        };
        this.handleAddBid.bind(this)
    }

    handleAddBid = () => {
        this.props.addBid()
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
            console.log ("setOffCanvasShow called:  off_canvas_show_status:" + this.state.off_canvas_show)
            this.setState({off_canvas_show : value}, () => console.log(this.state.off_canvas_show))
        }
        const handleOffCanvasClose = () => setOffCanvasShow(false);
        const toggleOffCanvasShow = () => setOffCanvasShow(!this.state.off_canvas_show);



        const chooseAction = (
            <Popover id="popover-basic">
                <Popover.Body>
                    <div className="btn-group-vertical">
                        <Button type="button" className="btn btn-primary" size="sm" onClick={toggleOffCanvasShow}>+</Button>
                        <OffCanvasBid show={this.state.off_canvas_show} onHide={handleOffCanvasClose}/>
                        <Button type="button" className="btn btn-primary" size="sm">i</Button>
                        <Button type="button" className="btn btn-primary" size="sm">-</Button>
                        <Button type="button" className="btn btn-primary" size="sm" onClick={this.handleAddBid}>X</Button>
                    </div>
                </Popover.Body>
            </Popover>
        );

        return (
            <OverlayTrigger trigger='click' placement="right" overlay={chooseAction}>
                <Button variant='link' className="rounded-circle" size='sm'>+</Button>
            </OverlayTrigger>
        )
    }
}
