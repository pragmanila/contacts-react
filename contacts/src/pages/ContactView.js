import { Table, Container } from 'react-bootstrap';

const data = [
    {
        firstName: 'John',
        lastName: 'Doe',
        middleName: 'D',
        mobileNumber: '123-456-7890',
        email: 'john@example.com'
    },
    {
        firstName: 'Jane',
        middleName: 'D',
        lastName: 'Smith',
        mobileNumber: '987-654-3210',
        email: 'jane@example.com'
    },
];

export default function ContactView() {
    return (
        <Container>
            <h1 className='text-center'>Contact List</h1>

            <Table striped>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.firstName}</td>
                            <td>{contact.middleName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.mobileNumber}</td>
                            <td>{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}