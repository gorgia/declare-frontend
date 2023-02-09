import React from 'react';
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

const removeChildNode = () => {
    const nextData = clone(this.state.data);
    const target = nextData.children;
    target.pop();
    this.injectedNodesCount--;
    this.setState({
        data: nextData
    });
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
                <NodeChoice show={true}/>
            </div>
        </foreignObject>
    </g>
);

export default function OrgChartTree() {
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
            <Tree data={orgChart}
                  renderCustomNodeElement={
                      renderRectSvgNode
                  }
            />
        </div>
    );
}