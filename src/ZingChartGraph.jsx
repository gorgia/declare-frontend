import React, {Component} from "react"
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
// EXPLICITLY IMPORT MODULE
import 'zingchart/modules-es6/zingchart-tree.min'


export default class ZingChartGraph extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef().current;
        this.state = {
            show: props.show,
            chartConfigOpt: {
                type: 'bar',
                series: [{
                    values: [4, 5, 3, 4, 5, 3, 5, 4, 11]
                }]
            },
            chartConfig: {
                type: 'tree',
                options: {
                    link: {
                        aspect: 'arc'
                    },
                    maxSize: 15,
                    minSize: 5,
                    'node[cls-fam]': {
                        size: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        backgroundColor: 'white',
                        label: {
                            visible: true
                        }
                    }
                },
                series: [
                    {
                        id: 'theworld',
                        parent: '',
                        name: 'The World'
                    },
                    {
                        id: 'asia',
                        parent: 'theworld',
                        name: 'Asia',
                        value: 4100000000
                    },
                    {
                        id: 'africa',
                        parent: 'theworld',
                        name: 'Africa',
                        value: 1260000000
                    }
                ]
            }
        };
        this.chartDone = this.chartDone.bind(this);
    }

    render() {
        return (
            <div>
                <ZingChart id='myChart' data={this.state.chartConfig} complete={this.chartDone} output='canvas'/>
            </div>
        );

    }

    chartDone(event) {
        console.log(`Event "Complete" - The chart is rendered\n`);
    }
}