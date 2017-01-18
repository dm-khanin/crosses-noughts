import React from 'react';

export default class TD extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data;
        switch (+this.props.item) {
            case -1:
                data = 'X';
                break;
            case 0:
                data = '';
                break;
            case 1:
                data = 'O';
                break;
        }
        return(
            <td data-key={this.props.dataKey}>{data}</td>
        );
    }
}