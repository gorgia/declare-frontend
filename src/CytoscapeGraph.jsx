import {Graph, Node, Edge} from './cytoscape-react';
import NodeChoice from "./NodeChoice";
import Cytoscape from "cytoscape";
import elk from "cytoscape-elk"
import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

Cytoscape.use(elk);

function Car({id}) {
    return (
        <div className="noddy-component">
            {id}
        </div>
    );
}

Car.propTypes = {
    id: PropTypes.string.isRequired,
};


function CytoscapeGraph() {
    return (
        <Container>
            <Graph layoutParams={{
                name: 'elk',
                elk: {
                    algorithm: 'layered',
                    direction: 'DOWN'
                }
            }} cyParams={{
                style: [
                    {
                        selector: 'edge',
                        style: {
                            'curve-style': 'taxi',
                            'taxi-direction': 'rightward',
                            'target-arrow-shape': 'triangle',
                            'arrow-scale': 0.66,
                        },
                    },
                ]
            }}>
                <Node key="foo" id="foo">
                    <NodeChoice id="foo"/>
                </Node>
                <Node key="bar" id="bar">
                    <NodeChoice id="foo"/>
                </Node>
                <Node key="bazz" id="bazz">
                    <NodeChoice id="foo"/>
                </Node>
                <Node key="puzz" id="puzz">
                    <NodeChoice id="foo"/>
                </Node>
                <Node key="azz" id="azz">
                    <NodeChoice id="foo"/>
                </Node>
                <Node key="az" id="az">
                    <NodeChoice id="foo"/>
                </Node>
                <Edge key="foo_bar" id="foo_bar" source="foo" target="bar"/>
                <Edge key="bar-bazz" id="bar-bazz" source="bar" target="bazz"/>
                <Edge key="bar-puzz" id="bar-puzz" source="bar" target="puzz"/>
                <Edge key="bazz-azz" id="bazz-azz" source="bazz" target="azz"/>
                <Edge key="bazz-az" id="bazz-az" source="bazz" target="az"/>
            </Graph>
        </Container>
    );
}


export default CytoscapeGraph