import React, {Component} from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Toast, ToastBody} from "react-bootstrap";
import styled from "styled-components";

const StyledToast = styled(Toast)`
    --bs-toast-max-width: 600px
`;

export default class BiddingBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show
        };
    }

    render() {
        return (
            <Container fluid={"xl"}>
                    <StyledToast show={this.state.show} onClose={() => {
                        this.setState({show: !this.state.show})
                        console.log("BUTTON CLOSE CLICKED")
                    }
                    }>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">BiddingBox</strong>
                        </Toast.Header>
                        <ToastBody>
                            <Row>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>1♧</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>1♢</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>1♡</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>1♤</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>1NT</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>2♧</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>2♢</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>2♡</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>2♤</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>2NT</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>3♧</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>3♢</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>3♡</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>3♤</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>3NT</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>4♧</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>4♢</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>4♡</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>4♤</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>4NT</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>5♧</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>5♢</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>5♡</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>5♤</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>5NT</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>6♧</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>6♢</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>6♡</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>6♤</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>6NT</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>7♧</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>7♢</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>7♡</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>7♤</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'}>7NT</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'} type="Button"
                                            style={{height: '60.723px'}}>X</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'} type="Button"
                                            style={{height: '60.723px'}}>XX</Button>
                                </Col>
                                <Col className={'d-grid'}>
                                    <Button variant="light" size={'lg'} type="Button"
                                            style={{height: '60.723px'}}>PASS</Button>
                                </Col>
                            </Row>
                        </ToastBody>
                    </StyledToast>
            </Container>
        )
    }
}
