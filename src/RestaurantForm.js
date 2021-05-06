import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { Component } from 'react'
import RestaurantDataService from './api/RestaurantDataService'

export default class RestaurantForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            restaurant: {}
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }


    // populate when the page is opened, with RESTAURANT JSON data
    componentDidMount() {
        if (this.state.id === -1) return

        RestaurantDataService.getRestaurantById(this.state.id)
            .then(response => this.setState({ restaurant: response.data }))
    }


    // Formik onSubmit Button
    onSubmit(values) {

        console.log(values)

        let restaurant = {
            id: this.state.id,
            name: values.name
        }

        // if ID == -1, this is a NEW restaurant to add
        if (this.state.id == -1) {
            RestaurantDataService.createRestaurant(restaurant)
                .then(() => this.props.history.push(`/restaurants`))
        }
        else {

            //This is an edit of existing restaurant
            RestaurantDataService.updateRestaurant(this.state.id, restaurant)
                .then(() => this.props.history.push(`/restaurants`))
        }

    }

    validate(values) {
        let errors = {}
        if (!values.name)
            errors.name = "Restaurant must have a name"

        return errors
    }

    render() {

        // IF this is EDIT, retrieve the initial values from Restaurant JSON
        // so we can populate the form
        let { name } = this.state.restaurant
        let restaurantId = this.state.id

        return (
            <div className="container">
                <h1>{`Restaurant ID: ${restaurantId == -1 ? 'NEW' : restaurantId}`}</h1>

                <Formik
                    // Formik Form initial values
                    initialValues={{ name }}

                    // Click to submit --> Formik onSubmit
                    onSubmit={this.onSubmit}

                    // handle validation --> Formik validate
                    validateOnBlur={false}
                    validateOnChange={false}
                    validate={this.validate}

                    // allow the Formik form to get the state
                    enableReinitialize={true}
                >

                    {

                        (props) =>
                            <Form>
                                <ErrorMessage name="name" component="p" className="alert alert-warning" />

                                <fieldset className="form-group">
                                    <label>Restaurant Name</label>
                                    <Field className="form-control" type="text" name="name" />
                                </fieldset>

                                <button className="btn btn-primary" type="submit" name="submit">Submit</button>
                            </Form>
                    }
                </Formik>
            </div>
        )
    }
}
