import React, { Component } from 'react'

class AddCitat extends Component {
    state = {
        overskrift: null,
        citat: null,
        forfatter: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addCitat(this.state)
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>

            <label htmlFor="overskrift">Overskrift:</label>
            <input type="text" id="overskrift" onChange={this.handleChange} />

            <label htmlFor="citat">Citat:</label>
            <input type="text" id="citat" onChange={this.handleChange} />

            <label htmlFor="forfatter">Forfatter:</label>
            <input type="text" id="forfatter" onChange={this.handleChange} />

            <button>Submit</button>

            </form>
            </div>
        )
    }
} 

export default AddCitat

