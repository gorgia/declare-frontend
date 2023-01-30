import React from 'react';
import Tree from 'react-d3-tree';
import BiddingBox from "./BiddingBox";

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

const renderRectSvgNode = ({nodeDatum, toggleNode}) => (
    <g onClick={toggleNode}>
        <text fill="black" strokeWidth="1" x="20">
            {nodeDatum.name}
        </text>
        {nodeDatum.attributes?.department && (
            <text fill="black" x="20" dy="20" strokeWidth="1">
                {nodeDatum.attributes?.department}
            </text>
        )}
        <foreignObject width={700} height={700} x={20}>
            <div>
                <BiddingBox show={false}/>
            </div>
        </foreignObject>
    </g>
);

export default function OrgChartTree() {
    return (
        // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
        <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
            <Tree data={orgChart}
                  renderCustomNodeElement={renderRectSvgNode}
            />
        </div>
    );
}