import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'


class HeaderComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            restaurant: {}
        }
        this.handleClickToAdd = this.handleClickToAdd.bind(this)
    }


    // Click to Add Restaurant
    handleClickToAdd() {
        // id of -1 will trigger the add new condition in save() in java
        this.props.history.push(`/restaurants/-1/edit`)
    }


    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Welp!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li><Link to="/" className="nav-link">All Restaurants</Link></li>

                            {/* ADMIN ONLY ACCESS */}
                            <li><Link to="/restaurants/-1/edit" className="nav-link"
                                onClick={() => this.handleClickToAdd}>Add A Restaurant</Link></li>

                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
export default withRouter(HeaderComponent)