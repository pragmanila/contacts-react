import React from "react";
import { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../components/UserReducer';
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';

export default function CreateUser() {
    // State Hooks to store the values of the new contact form input fields.
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");

    // to get the data or value of userlist
    const users = useSelector((state) => state.users);

    // hook from react-redux
    const dispatch = useDispatch();

    //an object with methods to redirect the user.
    const navigate = useNavigate();

    function addContact(e) {

        // Prevents the page redirection via form submission
        e.preventDefault();

        dispatch(addUser({ id: users[users.length - 1].id + 1, firstName, middleName, lastName, email, mobileNo }))
        Swal.fire({
            title: 'Success!',
            icon: 'success',
            text: 'Added new contact!'
        })
        navigate("/");

    }

    return (
        <Container>
            <div className="contact-container">
                <div className="contact-form">
                    <Form onSubmit={e => addContact(e)}>
                        <h1 className="my-5 text-center"> Create new User </h1>

                        <Form.Group className="mb-3" controlId="First Name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control className="firstName" type="text" placeholder="Enter First Name" required
                                value={firstName} onChange={e => { setFirstName(e.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="First Name">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control className="middleName" type="text" placeholder="Enter First Name" required
                                value={middleName} onChange={e => { setMiddleName(e.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Last Name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control className="lastName" type="text" placeholder="Enter Last Name" required
                                value={lastName} onChange={e => { setLastName(e.target.value) }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="email" type="email" placeholder="name@example.com" required
                                value={email} onChange={e => { setEmail(e.target.value) }}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="Mobile No">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control className="mobileNo" type="text" placeholder="Enter 11 digit number" required
                                value={mobileNo} onChange={e => { setMobileNo(e.target.value) }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" id="submitBtn"> Submit </Button>
                    </Form>
                </div>
                <Link to="/" className="btn btn-link"> Back </Link>
            </div>
        </Container>
    )
}