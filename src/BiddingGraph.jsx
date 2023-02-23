import React, {useEffect, useState} from 'react';
import Tree from 'react-d3-tree';
import NodeChoice from "./NodeChoice";
import clone from "clone";
import {Container, Col, Row, Button} from "react-bootstrap";


const handleClick = (showRef) => {
    console.log("node clicked!")
    showRef = !showRef
    return showRef
}


const removeChildNode = () => {
    const nextData = clone(this.state.data);
    const target = nextData.children;
    target.pop();
    this.injectedNodesCount--;
    this.setState({
        data: nextData
    });
};


const addChildNode = () => {
    const nextData = clone(this.state.data);
    const target = nextData.children;
    this.injectedNodesCount++;
    target.push({
        name: `Inserted Node ${this.injectedNodesCount}`,
        id: `inserted-node-${this.injectedNodesCount}`
    });
    this.setState({
        data: nextData
    });
};


export default function OrgChartTree() {
    const [injectedNodesCount, setInjectedNodesCount] = useState(3);
    const [orgChartData, setData] = useState( {
        name: 'Quinta Nobile',
        children: [
            {
                name: '1♧',
                attributes: {
                    bidid: 1,
                    bid: '1C',
                    HCP: 12,
                },
                children: [
                    {
                        name: '1♢',
                        attributes: {
                            bidid: 10,
                            bid: '1D'
                        }
                    },
                    {
                        name: '1♢',
                        attributes: {
                            bid: '1D',
                            bidid: 2,
                        },
                        children: [
                            {
                                name: '1♡',
                                attributes: {
                                    bidid: 3,
                                    bid: '1H'
                                }
                            },
                        ],
                    },
                    {
                        name: '1♡',
                        attributes: {
                            bidid: 4,
                            bid:'1H'
                        },
                        children: [
                            {
                                name: '1♤',
                                attributes: {
                                    bidid: 5,
                                    bid: '1S'
                                }
                            },
                        ],
                    },
                ],
            },
        ],
    });

    const addNode = () => {
        console.log("addNodeCalled");
        const nextData = clone(orgChartData);
        const target = nextData.children;
        setInjectedNodesCount(injectedNodesCount + 1)
        target.push({
            name: `Inserted Node ${injectedNodesCount}`,
            id: `inserted-node-${injectedNodesCount}`
        });
        setData(nextData);

    };

    const addBid = (starting_node_Id, newBid) => {
        console.log("addBid called");
        const nextData = clone(orgChartData);
        const traverse = require('traverse');
        traverse(nextData).forEach((node) => {
            if (node.attributes && node.attributes.bidid) {
                console.log(node.attributes.bidid)
                if (node.attributes.bidid === 1) {
                    if (!node.children) {
                        node.children = [];
                    }
                    node.children.push(
                        {
                            name: '1NT',
                            attributes: {
                                bidid: 6
                            }
                        }
                    )
                }
            }
        })
        console.log(nextData);
        setData(nextData);
        setInjectedNodesCount(injectedNodesCount + 1)
        console.log("injected nodes count = " + injectedNodesCount)
    }

    const renderRectSvgNode = ({nodeDatum, showRef}) => (
        <g>
            <text fill="black" strokeWidth="1" x="20">
                {nodeDatum.name}
            </text>
            {nodeDatum.attributes?.department && (
                <text fill="black" x="20" dy="20" strokeWidth="1">
                    {nodeDatum.attributes?.department}
                </text>
            )}
            <foreignObject width={20} height={20} x={20} y={-20}>
                <div>
                    <NodeChoice show={true} addBid={addBid} bidObj={nodeDatum} bid={nodeDatum.attributes?.bid}/>
                </div>
            </foreignObject>
        </g>
    );

    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <Container fluid style={{height: '50vh'}}>
            <Tree data={orgChartData}
                  renderCustomNodeElement={
                      renderRectSvgNode
                  }
            />
        </Container>
    );
}