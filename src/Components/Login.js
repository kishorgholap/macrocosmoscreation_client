
//Using Normal Css
// import { useState } from "react";
// import { login } from "../Service/Api";
// import { useNavigate } from "react-router-dom";
// import '../Css/Login.css'; 


// function Login() {
//     const [name, setName] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     async function handleLogin(e) {
//         e.preventDefault();
//         try {
//             const response = await login(name, password);
//             if (response.success) {
//                 localStorage.setItem('token', response.jwtToken);
//                 localStorage.setItem('userId', response.userId);
//                 navigate('/schedule');
//             } else {
//                 alert('Login failed');
//             }
//         } catch (error) {
//             console.error(error);
//             alert('Login failed');
//         }
//     }

//     return (
//         <div className="login-container">
//             <form className="login-form" onSubmit={handleLogin}>
//                 <h2>Login</h2>
//                 <input
//                     type="text"
//                     placeholder="Enter Username"
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Enter Password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Login;

///Using React Boostrap

import { useState } from "react";
import { login } from "../Service/Api";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        setError(''); // Reset error message
        try {
            const response = await login(name, password);
            if (response.success) {
                localStorage.setItem('token', response.jwtToken);
                localStorage.setItem('userId', response.userId);
                navigate('/schedule');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error(error);
            setError('Login failed. Please try again.');
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Form className="login-form" onSubmit={handleLogin} style={{ width: '300px' }}>
                <h2 className="text-center">Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">Submit</Button>
            </Form>
        </Container>
    );
}

export default Login;