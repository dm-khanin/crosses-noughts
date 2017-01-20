import React from 'react';
import Table from '../components/Grid';
import Player from '../components/Player';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePlayer: null,
            isDataLoaded: false,
            whoWins: null,
            arr: [],
            initialArr: []
        };

        this.onSetCrossesIsActive = this.onSetCrossesIsActive.bind(this);
        this.onSetNoughtsIsActive = this.onSetNoughtsIsActive.bind(this);
        this.dataLoaded = this.dataLoaded.bind(this);
        this.isWin = this.isWin.bind(this);
        this.onTdClick = this.onTdClick.bind(this);
    }

    onSetCrossesIsActive() {
        this.setState({
            activePlayer: "crosses"
        });
    }

    onSetNoughtsIsActive() {
        this.setState({
            activePlayer: "noughts"
        });
    }

    onTdClick(key, value) {
        if (this.state.activePlayer === null || value !== 0 || this.state.whoWins !== null) {
            return;
        }

        let prevArray = this.state.arr;
        this.state.activePlayer === "crosses" ? prevArray[key] = -1 : prevArray[key] = 1;
        this.setState({
            arr: prevArray
        });

        if (this.isWin(this.state.arr)) {
            return;
        }

        prevArray[key] === -1 ? this.onSetNoughtsIsActive() : this.onSetCrossesIsActive();
    }

    dataLoaded(data) {
        this.setState({
            isDataLoaded: true,
            initialArr: data,
            arr: data.slice()
        });
    }

    isWin(arr) {
        if ((arr[0] + arr[1] + arr[2] == 3) || (arr[3] + arr[4] + arr[5] == 3) || (arr[6] + arr[7] + arr[8] == 3) ||
            (arr[0] + arr[3] + arr[6] == 3) || (arr[1] + arr[4] + arr[7] == 3) || (arr[2] + arr[5] + arr[8] == 3) ||
            (arr[0] + arr[4] + arr[8] == 3) || (arr[2] + arr[4] + arr[6] == 3)) {
            this.setState({
                whoWins: "noughts",
                activePlayer: null
            });
            alert(`The winner is noughts!`);
            return true;

        } else if
            ((arr[0] + arr[1] + arr[2] == -3) || (arr[3] + arr[4] + arr[5] == -3) || (arr[6] + arr[7] + arr[8] == -3) ||
             (arr[0] + arr[3] + arr[6] == -3) || (arr[1] + arr[4] + arr[7] == -3) || (arr[2] + arr[5] + arr[8] == -3) ||
             (arr[0] + arr[4] + arr[8] == -3) || (arr[2] + arr[4] + arr[6] == -3)) {
                this.setState({
                    whoWins: "crosses",
                    activePlayer: null
                });
                alert(`The winner is crosses!`);
                return true;

        } else if (arr.indexOf(0) === -1){
            this.setState({
                whoWins: "draw",
                activePlayer: null
            });
            alert('Round draw!');
            return true;
        }

        return false;
    }

    render() {
        return (
            <div>
                <h1>Welcome to the game!</h1>
                <Player
                    crosses={this.onSetCrossesIsActive}
                    noughts={this.onSetNoughtsIsActive}
                    active={this.state.activePlayer}
                    win={this.state.whoWins}
                />
                <Table
                    onTdClick={this.onTdClick}
                    dataLoaded={this.dataLoaded}
                    isDataLoaded={this.state.isDataLoaded}
                    initialArr={this.state.initialArr}
                    arr={this.state.arr}
                />
            </div>
        )
    }
}