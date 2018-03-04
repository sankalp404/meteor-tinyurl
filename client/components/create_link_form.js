import React, { Component } from 'react'

class CreateLinkForm extends Component {
    constructor(props) {
        super(props)
        this.state = { error: '' }
    }

    handleSubmit(event) {
        event.preventDefault();
        // Using refs is a bad idea, just showing that it can be used like this
        // Should use state.
        Meteor.call('links.insert', this.refs.myInput.value, (error) => {
            if (error) {
                this.setState({ error: 'Enter a valid URL'})
            } else {
                this.setState({ error: '' })
                this.refs.myInput.value = ''
            }
        });
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit.bind(this) }>
                <div className="form-group">
                    <label> Shorten Url </label>
                    <input ref="myInput" className="form-control" />
                </div>
                <div className="text-danger">{ this.state.error }</div>
                <button className="btn btn-primary">Do it!</button>
            </form>
        )
    }
}

export default CreateLinkForm