import React, {Component} from "react"
import {RJSFSchema} from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";

const hand_descr = {
    "distribution": {
        "suits_distribution": {
            "numberOfSpades": null,
            "numberOfHearts": null,
            "numberOfDiamonds": null,
            "numberOfClubs": null
        },
        "shape": {
            "monocolor": false,
            "bicolor": false,
            "tricolor": false,
        }
    },
    "points": {
        "HCP-min": null,
        "HCP-max": null,
        "distribution_points-min": null,
        "distribution_points-max": null,
        "total_points_min": null,
        "total_points_max": null
    },
    "keycards": {
        "number_of_winners": null,
        "number_of_loosers": null,
        "control_in_spades": null,
        "control_in_hearts": null,
        "control_in_diamonds": null,
        "control_in_clubs": null,
        "keycards_list": []
    }
}


const schema: RJSFSchema = {
        "type": "object",
        "properties": {
            "fixedNoToolbar": {
                "title": "Hand Description",
                "type": "array",
                "items": [
                    {
                        "title": "Suits distribution",
                        "type": "object",
                        "properties": {
                            "number_of_spades": {"type": "integer", "title": "number of spades"},
                            "number_of_hearts": {"type": "integer", "title": "number of diamonds"},
                            "number_of_diamonds": {"type": "integer", "title": "number of hearts"},
                            "number_of_clubs": {"type": "integer", "title": "number of clubs"},
                        }
                    },
                    {
                        "title": "Shape",
                        "type": "object",
                        "properties": {
                            "monocolor": {"type": "boolean", enum: [true, false]},
                            "bicolor": {"type": "boolean", enum: [true, false]},
                            "tricolor": {"type": "boolean", enum: [true, false]}
                        }
                    },
                    {
                        "title": "Points",
                        "type": "object",
                        "properties": {
                            "HCP-min": {"type": "integer"},
                            "HCP-max": {"type": "integer"},
                            "distribution_points-min": {"type": "integer"},
                            "distribution_points-max": {"type": "integer"},
                            "total_points_min": {"type": "integer"},
                            "total_points_max": {"type": "integer"}
                        }
                    },
                    {
                        "title": "Keycards",
                        "type": "object",
                        "properties": {
                            "number_of_winners": {"type": "integer"},
                            "number_of_loosers": {"type": "integer"},
                            "control_in_spades": {"type": "integer"},
                            "control_in_hearts": {"type": "integer"},
                            "control_in_diamonds": {"type": "integer"},
                            "control_in_clubs": {"type": "integer"},
                            "keycards_list": {"type": "string"}
                        }
                    },
                ]
            }
        }
    };

const log = (type) => console.log.bind(console, type);

class HandDescriptionJsonForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show,
            formData: {}
        };
    }

    changeFormData = (newFormData) => {
        this.setState({formData: newFormData})
    }

    render() {
        return (
            <Form schema={schema} validator={validator} formData={this.state.formData}
                  onChange={e => this.changeFormData(e.formData)} liveValidate/>
        )
    }
}


export default HandDescriptionJsonForm