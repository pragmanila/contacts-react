import { Table, Container, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteUser } from '../components/UserReducer';
import Swal from 'sweetalert2';

export default function ContactView() {

    // to get the data or value of userlist
    const users = useSelector((state) => state.users);
    console.log(users)
    // hook from react-redux
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        // Display a confirmation dialog using SweetAlert2
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this contact!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
        }).then((result) => {
            if (result.isConfirmed) {
                // Dispatch the delete action if user confirms
                dispatch(deleteUser({ id: id }));
                Swal.fire('Deleted!', 'The contact has been deleted.', 'success');
            }
        });
    }

    return (
        <Container>
            <h1 className='text-center p-5'>Contact List</h1>
            <div className='py-3'>
                <Link to="/create" className='btn btn-success'> Add + </Link>
            </div>
            <Table striped className='p-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.middleName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.mobileNo}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-primary'>Edit</Link>
                            </td>
                            <td>
                                <Button className='btn btn-danger' onClick={() => handleDelete(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}