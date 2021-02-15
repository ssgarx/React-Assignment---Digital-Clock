import React, { useState, useEffect } from 'react';
import '../styles/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        let hours = this.state.date.getHours() < 12 ? this.state.date.getHours() : this.state.date.getHours() - 12;
        hours = hours < 10 ? "0" + hours : hours;
        let mins = this.state.date.getMinutes();
        mins = mins < 10 ? "0" + mins : mins;
        let secs = this.state.date.getSeconds();
        secs = secs < 10 ? "0" + secs : secs;
        let postFix = this.state.date.getHours() < 12 ? "AM" : "PM";
        return (
            <div className="Clock">
                <h3 id="time">{hours}:{mins}:{secs} {postFix}</h3>
            </div>
        );
    }
}

export default App;
