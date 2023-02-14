import React, {useState} from 'react';
import Tree from 'react-d3-tree';
import BiddingBox from "./BiddingBox";
import NodeChoice from "./NodeChoice";
import Button from "react-bootstrap/Button";
import {OverlayTrigger, Popover} from "react-bootstrap";
import clone from "clone";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
    name: 'Quinta Nobile',
    children: [
        {
            name: '1♧',
            attributes: {
                department: 'Opening',
                HCP: 12,
            },
            children: [
                {
                    name: '1♢',
                    attributes: {
                        department: 'Fabrication',
                    },
                    children: [
                        {
                            name: 'Worker',
                        },
                    ],
                },
                {
                    name: '1♡',
                    attributes: {
                        department: 'Assembly',
                    },
                    children: [
                        {
                            name: '1♤',
                        },
                    ],
                },
            ],
        },
    ],
};


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
    const [orgChartData, setData] = useState(
        {
        name: 'Quinta Nobile',
        children: [
            {
                name: '1♧',
                attributes: {
                    department: 'Opening',
                    HCP: 12,
                },
                children: [
                    {
                        name: '1♢',
                        attributes: {
                            department: 'Fabrication',
                        },
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                    {
                        name: '1♡',
                        attributes: {
                            department: 'Assembly',
                        },
                        children: [
                            {
                                name: '1♤',
                            },
                        ],
                    },
                ],
            },
        ],
    });

    const addNode = () => {
        console.log("addNodeCalled")
        const nextData = clone(orgChartData);
        const target = nextData.children;
        setInjectedNodesCount(injectedNodesCount + 1)
        target.push({
            name: `Inserted Node ${injectedNodesCount}`,
            id: `inserted-node-${injectedNodesCount}`
        });
        setData(nextData);
    };

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
                    <NodeChoice show={true} addChildNode={addNode}/>
                </div>
            </foreignObject>
        </g>
    );

    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
            <Tree data={orgChartData}
                  renderCustomNodeElement={
                      renderRectSvgNode
                  }
            />
        </div>
    );
}