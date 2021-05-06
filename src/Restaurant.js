import React, { Component } from 'react'
import RestaurantDataService from './api/RestaurantDataService'

export default class Restaurant extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            restaurant: {}
        }
    }

    // populate when the page is opened, with RESTAURANT JSON data
    componentDidMount() {
        if (this.state.id === -1) return

        RestaurantDataService.getRestaurantById(this.state.id)
            .then(response => this.setState({ restaurant: response.data }))
    }

    render() {
        return (
            <div className="container">
                <h1 className="display-3 text-center">This is a restaurant page</h1>
                <h2>{this.state.restaurant.id}</h2>
                <h2>{this.state.restaurant.name}</h2>
            </div>
        )
    }
}