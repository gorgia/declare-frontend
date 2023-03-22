export default class Neo4jMock {
    constructor() {
        this.data =
            {
                "graph": {
                    "nodes": [{
                        "id": "8",
                        "labels": ["Bike"],
                        "properties": {
                            "bid_label": "1♢"
                        }
                    }, {
                        "id": "9",
                        "labels": ["Wheel"],
                        "properties": {
                            "bid_label": "1♡"
                        }
                    }, {
                        "id": "10",
                        "labels": ["Wheel"],
                        "properties": {
                            "bid_label": "1♤"
                        }
                    }],
                    "relationships": [{
                        "id": "0",
                        "type": "HAS",
                        "startNode": "8",
                        "endNode": "9",
                        "properties": {
                            "position": 1
                        }
                    }, {
                        "id": "1",
                        "type": "HAS",
                        "startNode": "8",
                        "endNode": "10",
                        "properties": {
                            "position": 2
                        }
                    }]
                }
            }
    }


    addNode(nodeObj) {
        this.data.graph.nodes.push(nodeObj)
    }
}


