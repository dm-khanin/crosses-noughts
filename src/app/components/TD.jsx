import React from 'react';

export default class TD extends React.Component {
    constructor(props) {
        super(props);
        this.onTdClick = this.onTdClick.bind(this);
    }

    onTdClick() {
        this.props.onTdClick(this.props.dataKey, this.props.item);
    }
    
    render() {
        let values = {
            "1": "O",
            "-1": "X",
            "0": ""
        };
        
        return(
            <td onClick={this.onTdClick}>{values[this.props.item]}</td>
        );
    }
}