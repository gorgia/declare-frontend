import {Graph, Node, Edge} from './cytoscape-react';
import NodeChoice from "./NodeChoice";
import Cytoscape from "cytoscape";
import elk from "cytoscape-elk"
import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import Neo4jMock from "./Neo4jMock";
import clone from "clone";
import traverse from "traverse";

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

    const [neo4jData, setNo4jData] = useState(new Neo4jMock().data)
    const [injectedNodesCount, setInjectedNodesCount] = useState(3);

    const getMaxBidId = () => {
        return Math.max(...neo4jData.graph.nodes.map(o => o.id))
    }

    const getMaxRelationshipId = () => {
        return Math.max(...neo4jData.graph.relationships.map(o => o.id))
    }

    const tempAddBid = (startNodeId) => {
        const maxBidId = (getMaxBidId() + 1).toString()
        const newBid = {
            "id": maxBidId,
            "labels": ["Bid"],
            "properties": {
                "bid_label": "1NT"
            }
        }
        const maxRelId = (getMaxRelationshipId() + 1).toString()
        const newRelationship = {
            "id": maxRelId,
            "startNode": startNodeId,
            "endNode": maxBidId
        }
        addBid(newBid, newRelationship)
    }

    const addBid = (newBid, newRelationship) => {
        console.log("addBid called: starting node id " + newRelationship.startNode);
        const nextData = clone(neo4jData);
        nextData.graph.nodes.push(newBid)
        nextData.graph.relationships.push(newRelationship)
        console.log(nextData);
        setNo4jData(nextData);
        setInjectedNodesCount(injectedNodesCount + 1)
        console.log("injected nodes count = " + injectedNodesCount)
    }

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
                {neo4jData.graph.nodes.map((node) => (
                    <Node key={node.id} id={node.id}>
                        <NodeChoice id={node.id} addBid={tempAddBid} bid={node}/>
                    </Node>
                ))}
                {neo4jData.graph.relationships.map((relationship) => (
                    <Edge key={relationship.startNode + "_" + relationship.endNode}
                          id={relationship.startNode + "_" + relationship.endNode}
                          source={relationship.startNode} target={relationship.endNode}/>
                ))}
            </Graph>
        </Container>
    );
}


export default CytoscapeGraph