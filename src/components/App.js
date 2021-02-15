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
        let minutes = this.state.date.getMinutes();
        let seconds = this.state.date.getSeconds();
        let ampm = this.state.date.getHours() >= 12 ? 'PM' : 'AM';
        return (
            <div className="Clock">
                <h3 id="time">
                    {hours == 0 ? 12 : hours > 12 ? hours - 12 : hours}:
                    {minutes > 9 ? minutes : `0${minutes}`}:
                    {seconds > 9 ? seconds : `0${seconds}`} {ampm}
                </h3>
            </div>
        );
    }
}

export default App;
