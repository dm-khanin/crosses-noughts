import React from 'react';
import ReactDOM from 'react-dom';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.crossesHandlerClick = this.crossesHandlerClick.bind(this);
        this.noughtsHandlerClick = this.noughtsHandlerClick.bind(this);
    }

    crossesHandlerClick() {
        this.setButtonsDisabled();
        this.props.crosses();
    }

    noughtsHandlerClick() {
        this.setButtonsDisabled();
        this.props.noughts();
    }

    setButtonsDisabled() {
        const button1 = ReactDOM.findDOMNode(this.refs.btn1);
        const button2 = ReactDOM.findDOMNode(this.refs.btn2);
        button1.setAttribute('disabled', 'disabled');
        button2.setAttribute('disabled', 'disabled');
    }

    render() {
        const h3style = {
            color: "#EBEBEB"
        };

        return (
            <div>
                <h3 style={this.props.active || !!this.props.win ? h3style : {}}>Choose the player first:</h3>
                <button type="button" ref="btn1" className="btn btn-default" onClick={this.crossesHandlerClick}>Crosses
                </button>
                <span> </span>
                <button type="button" ref="btn2" className="btn btn-default" onClick={this.noughtsHandlerClick}>Noughts</button>

                {
                    this.props.active && <h3>The active player now is <b>{this.props.active}</b>. Your turn:</h3>
                }
                {
                    !!this.props.win &&
                    <div>
                        <h3>{this.props.win == "draw" ? "Round draw!" : "The winner is " + this.props.win + "!"}</h3>
                        <button type="button" className="btn btn-default" onClick={() => {location.reload(true)}}>Play again?</button>

                    </div>
                }

            </div>
        );
    }
}