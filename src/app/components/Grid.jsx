import React from 'react';
import axios from 'axios';
import TD from './TD';
import '../styles/Grid.css';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.onmousedown = this.onmousedown.bind(this);
        this.onTdClick = this.onTdClick.bind(this);
    }

    componentDidMount() {
        axios.get('http://606ep.ru:8080')
            .then((response) => {
                const initialAlignment = response.data.toString().split(',').map((item) => +item );
                this.props.dataLoaded(initialAlignment);
            });
    }

    onmousedown(e) {
        e.preventDefault();
    }

    onTdClick(key, value) {
        this.props.onTdClick(key, value);
    }

    render() {
        if (this.props.isDataLoaded) {
            var TDs = this.props.arr.map((item, index) => {
                return (
                    <TD
                        key={index}
                        dataKey={index}
                        onTdClick={this.onTdClick}
                        item={item}
                    />
                    );
            });
        }

        return (
            <div>
                {
                    this.props.isDataLoaded &&
                        <table class="table" onMouseDown={this.onmousedown} >
                            <tbody>
                                <tr>
                                    {TDs[0]}{TDs[1]}{TDs[2]}
                                </tr>
                                <tr>
                                    {TDs[3]}{TDs[4]}{TDs[5]}
                                </tr>
                                <tr>
                                    {TDs[6]}{TDs[7]}{TDs[8]}
                                </tr>
                            </tbody>
                        </table>
                }
            </div>
        )
    }
}