import React, { Component } from 'react'
import {Button, Form, Header } from 'semantic-ui-react';
import axios from "axios";


class AddContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            salary: '',
            hobby: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('https://sheet.best/api/sheets/900eaaa5-b6ca-4448-b354-528e464af612', this.state)
            .then(response => {
                console.log(response);
            });
    }

    render() {
        const {name, age, salary, hobby} = this.state;
        return (
            <div className="Add-content-wrapper">
                <Header as='h2'>Add new data in React Google Sheets!</Header>
                <Form className="form" onSubmit={this.submitHandler}>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Enter your name' type="text" name = "name" value = {name} onChange={this.changeHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Age</label>
                        <input placeholder='Enter your age' type="number" name = "age" value = {age} onChange={this.changeHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Salary</label>
                        <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Hobby</label>
                        <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
                    </Form.Field>

                    <Button color="blue" type='submit'>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default AddContent;