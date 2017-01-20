import React from 'react';
import ReactDOM from 'react-dom';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const h3style = {
            color: "#EBEBEB"
        };

        return (
            <div>
                <h3 style={this.props.active || !!this.props.win ? h3style : {}}>Choose the player first:</h3>
                <button type="button"
                        disabled={this.props.active || !!this.props.win ? "disabled": false }
                        className="btn btn-default"
                        onClick={this.props.crosses}
                >Crosses
                </button>
                <span> </span>
                <button type="button"
                        disabled={this.props.active || !!this.props.win ? "disabled": false }
                        className="btn btn-default"
                        onClick={this.props.noughts}
                >Noughts
                </button>

                {
                    this.props.active && <h3>The active player now is <b>{this.props.active}</b>. Your turn:</h3>
                }
                {
                    !!this.props.win &&
                    <div>
                        <h3>{this.props.win == "draw" ? "Round draw!" : "The winner is " + this.props.win + "!"}</h3>
                        <button type="button"
                                className="btn btn-default"
                                onClick={() => {location.reload(true)}}
                        >Play again?
                        </button>

                    </div>
                }

            </div>
        );
    }
}