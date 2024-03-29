import React, {Component} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Toast, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import styled from "styled-components";
import bidComparator from "./BidComparator";

const StyledToast = styled(Toast)`
    --bs-toast-max-width: 380px
`;


export default class BiddingBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            bid: '',
            lastBid: props.lastBid
        };
    }

    handleclick = (e) => {
        this.setState({bid : e.target.value }, () => {console.log(this.state.bid)})
    }

    isBidNotAllowed = (bid) => {
        return bidComparator(bid, this.props.lastBid) <= 0
    }

    render() {
        return (
            <ToggleButtonGroup name="togglebid" onClick={this.handleclick}>
                <Container className="p-0">

                    <Row className="d-flex p-0">
                        <Col className="p-0">
                            <ToggleButton id="1C" value="1C" variant="light" size={'lg'} disabled={this.isBidNotAllowed("1C")}>1♧</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="1D" value="1D"  variant="light" size={'lg'} disabled={this.isBidNotAllowed("1D")}>1♢</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="1H" value="1H"  variant="light" size={'lg'} disabled={this.isBidNotAllowed("1H")}>1♡</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="1S" value="1S" variant="light" size={'lg'} disabled={this.isBidNotAllowed("1S")}>1♤</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="1NT" value="1NT"  variant="light" size={'lg'} disabled={this.isBidNotAllowed("1NT")}>1NT</ToggleButton >
                        </Col>
                    </Row>
                    <Row className="d-flex p-0">
                        <Col className="p-0">
                            <ToggleButton id="2C" value="2C" variant="light" size={'lg'} disabled={this.isBidNotAllowed("2C")}>2♧</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="2D" value="2D" variant="light" size={'lg'} disabled={this.isBidNotAllowed("2D")}>2♢</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="2H" value="2H" variant="light" size={'lg'} disabled={this.isBidNotAllowed("2H")}>2♡</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="2S" value="2S" variant="light" size={'lg'} disabled={this.isBidNotAllowed("2S")}>2♤</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="2NT" value="2NT" variant="light" size={'lg'} disabled={this.isBidNotAllowed("2NT")}>2NT</ToggleButton >
                        </Col>
                    </Row>
                    <Row className="d-flex p-0">
                        <Col className="p-0">
                            <ToggleButton id="3C" value="3C" variant="light" size={'lg'}  disabled={this.isBidNotAllowed("3C")} >3♧</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="3D" value="3D" variant="light" size={'lg'} disabled={this.isBidNotAllowed("3D")}>3♢</ToggleButton>
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="3H" value="3H" variant="light" size={'lg'} disabled={this.isBidNotAllowed("3H")}>3♡</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="3S" value="3S" variant="light" size={'lg'} disabled={this.isBidNotAllowed("3S")}>3♤</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="3NT" value="3NT" variant="light" size={'lg'} disabled={this.isBidNotAllowed("3NT")}>3NT</ToggleButton >
                        </Col>
                    </Row>
                    <Row className="d-flex p-0">
                        <Col className="p-0">
                            <ToggleButton id="4C" value="4C" variant="light" size={'lg'} disabled={this.isBidNotAllowed("4C")}>4♧</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="4D" value="4D" variant="light" size={'lg'} disabled={this.isBidNotAllowed("4D")}>4♢</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="4H" value="4H" variant="light" size={'lg'} disabled={this.isBidNotAllowed("4H")}>4♡</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="4S" value="4S" variant="light" size={'lg'} disabled={this.isBidNotAllowed("4S")}>4♤</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="4NT" value="4NT" variant="light" size={'lg'} disabled={this.isBidNotAllowed("4NT")}>4NT</ToggleButton >
                        </Col>
                    </Row>
                    <Row className="d-flex p-0">
                        <Col className="p-0">
                            <ToggleButton id="5C" value="5C" variant="light" size={'lg'} disabled={this.isBidNotAllowed("5C")}>5♧</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="5D" value="5D" variant="light" size={'lg'} disabled={this.isBidNotAllowed("5D")}>5♢</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="5H" value="5H" variant="light" size={'lg'} disabled={this.isBidNotAllowed("5H")} >5♡</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="5S" value="5NT" variant="light" size={'lg'} disabled={this.isBidNotAllowed("5S")}>5♤</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="5NT" variant="light" size={'lg'} disabled={this.isBidNotAllowed("5NT")}>5NT</ToggleButton >
                        </Col>
                    </Row>
                    <Row className="d-flex p-0">
                        <Col className="p-0">
                            <ToggleButton id="6C" value="6C" variant="light" size={'lg'} disabled={this.isBidNotAllowed("6C")}>6♧</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="6D" value="6D" variant="light" size={'lg'} disabled={this.isBidNotAllowed("6D")}>6♢</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="6H" value="6H" variant="light" size={'lg'} disabled={this.isBidNotAllowed("6H")}>6♡</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="6S" value="6S" variant="light" size={'lg'} disabled={this.isBidNotAllowed("6S")}>6♤</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="6NT" value="6NT" variant="light" size={'lg'} disabled={this.isBidNotAllowed("6NT")}>6NT</ToggleButton >
                        </Col>
                    </Row>
                    <Row className="d-flex">
                        <Col className="p-0">
                            <ToggleButton id="7C" value="7C" variant="light" size={'lg'} disabled={this.isBidNotAllowed("7C")}>7♧</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="7D" value="7D"  variant="light" size={'lg'} disabled={this.isBidNotAllowed("7D")}>7♢</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="7H" value="7H" variant="light" size={'lg'} disabled={this.isBidNotAllowed("7H")}>7♡</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="7S" value="7S"  variant="light" size={'lg'} disabled={this.isBidNotAllowed("7S")}>7♤</ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton id="7NT" value="7NT"  variant="light" size={'lg'} disabled={this.isBidNotAllowed("7NT")}>7NT</ToggleButton >
                        </Col>
                    </Row>
                    <Row className="d-flex p-0">
                        <Col className="p-0">
                            <ToggleButton variant="light" size="lg" style={{height: '60.723px', width: '100%'}}>X
                            </ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton variant="light" size="lg" style={{height: '60.723px', width: '100%'}}>XX
                            </ToggleButton >
                        </Col>
                        <Col className="p-0">
                            <ToggleButton variant="light" size="lg" style={{height: '60.723px', width: '100%'}}>PASS
                            </ToggleButton >
                        </Col>
                    </Row>

                </Container>
            </ToggleButtonGroup>
        )
    }
}
