import React from 'react';
import axios from 'axios';
import TD from './TD';
import '../styles/Grid.css';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.onmousedown = this.onmousedown.bind(this);
    }

    componentDidMount() {
        axios.get('http://606ep.ru:8080')
            .then((response) => {
                this.initialAlignment = response.data.toString().split(',').map((item) => +item );
                this.props.dataLoaded(this.initialAlignment);
            });
    }

    onmousedown(e) {
        e.preventDefault();
    }

    render() {
        if (this.props.isDataLoaded) {
            let data = this.initialAlignment;

            var tds1 = data.map((item, index) => {
                return index < 3 && <TD key={index} dataKey={index} item={item} />
            });
            var tds2 = data.map((item, index) => {
                return index > 2 && index < 6 && <TD key={index} dataKey={index} item={item} />
            });
            var tds3 = data.map((item, index) => {
                return index > 5 && <TD key={index} dataKey={index} item={item} />
            });
        }

        return (
            <div>
                {
                    this.props.isDataLoaded &&
                        <table class="table" onClick={this.props.click} onMouseDown={this.onmousedown} >
                            <tbody>
                                <tr>
                                    {tds1}
                                </tr>
                                <tr>
                                    {tds2}
                                </tr>
                                <tr>
                                    {tds3}
                                </tr>
                            </tbody>
                        </table>
                }
            </div>
        )
    }
}