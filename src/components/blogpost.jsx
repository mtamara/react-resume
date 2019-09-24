import React, { Component } from 'react';

class Blogpost extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{ this.formatCount() }</span>
                <button className="btn btn-sm btn-secondary">Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default Blogpost;