import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: '',
            duration: '',
            incline: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="distance" onChange={this.handleChange} type="number" placeholder="Distance (miles)" />
                    <input name="duration" onChange={this.handleChange} type="number" placeholder="Time (minutes)" />
                    <input name="incline" onChange={this.handleChange} type="number" placeholder="Incline (percent)" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default HomePage;