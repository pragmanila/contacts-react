import React from 'react';
import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { updateUser } from '../components/UserReducer';
import Swal from 'sweetalert2';

export default function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);

    // Find the existing user by id
    const existingUser = users.filter(user => user.id == id);
    // console.log(existingUser)

    const { firstName, middleName, lastName, mobileNo, email } = existingUser[0];
    const [sfirstName, setFirstName] = useState(firstName);
    const [smiddleName, setMiddleName] = useState(middleName);
    const [slastName, setLastName] = useState(lastName);
    const [smobileNo, setMobileNo] = useState(mobileNo);
    const [semail, setEmail] = useState(email);

    // hook from react-redux
    const dispatch = useDispatch();

    //an object with methods to redirect the user.
    const navigate = useNavigate();

    function handleUpdateUser(e) {
        // Prevents the page redirection via form submission
        e.preventDefault();

        dispatch(updateUser({
            id: id,
            firstName: sfirstName,
            middleName: smiddleName,
            lastName: slastName,
            mobileNo: smobileNo,
            email: semail
        }))
        Swal.fire({
            title: 'Success!',
            icon: 'success',
            text: 'Successfully updated the user'
        })
        navigate("/")
    }

    return (
        <Container>
            <div className="contact-container">
                <div className="contact-form">
                    <Form onSubmit={e => handleUpdateUser(e)}>
                        <h1 className="my-5 text-center"> Update Contact</h1>

                        <Form.Group className="mb-3" controlId="First Name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name="firstName"
                                className="firstName"
                                type="text"
                                value={sfirstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="First Name">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control
                                name="middleName"
                                className="middleName"
                                type="text"
                                value={smiddleName}
                                onChange={(e) => setMiddleName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="First Name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name="firstName"
                                className="firstName"
                                type="text"
                                value={sfirstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Last Name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name="lastName"
                                className="lastName"
                                type="text"
                                value={slastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="email"
                                className="email"
                                type="email"
                                value={semail}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Mobile No">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control
                                name="mobileNo"
                                className="mobileNo"
                                type="text"
                                value={smobileNo}
                                onChange={(e) => setMobileNo(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" id="submitBtn">
                            Submit
                        </Button>
                    </Form>
                </div>
                <Link to="/" className="btn btn-link">
                    Back
                </Link>
            </div>
        </Container>
    );
}