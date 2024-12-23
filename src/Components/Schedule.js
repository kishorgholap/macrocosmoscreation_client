// import { useEffect, useState } from "react";
// import { createSchedule, getAllEmployees } from "../Service/Api";


// function Schedule(){
//     const [employee,setEmployee]=useState([]);
//     const [selectedEmployees,setSelectedEmployees]=useState([])
//     const [comment,setComment]=useState('')
//     const [time,setTime]=useState('');
//     const [date,setDate]=useState('');
//     const [loading, setLoading] = useState(false); // State for loading
//     const token=localStorage.getItem('token');
//     const userId=localStorage.getItem('userId');
//     // console.log('token',token);
    
//      useEffect(()=>{
//           getEmployees()
//     },[])
//     async function getEmployees(){
//         const {data}=await getAllEmployees(token);
//         // console.log('data',responce);
        
//         setEmployee(data.result);
        
//     }
//     // console.log('here',employee);
//     async function handleSubmit(e){
//         e.preventDefault();
//         setLoading(true); // Set loading to true when starting the request

//         //Calling API
//      try {
//             const data = await createSchedule({
//                 employees: selectedEmployees,
//                 date,
//                 time,
//                 comment,
//                 userId
//             });

//             if (data.scheduleId === 'emailSent') {
//                 alert('Schedule created');
//             }
//         } catch (error) {
//             console.error('Error creating schedule:', error);
//             alert('Failed to create schedule. Please try again.');
//         } finally {
//             setLoading(false); // Set loading to false when the request is complete
//         }

 

//     }
//     function checkBoxChange(item){
//         setSelectedEmployees((prev) =>
//             prev.some((emp) => emp.id === item.id) 
//                 ? prev.filter((emp) => emp.id !== item.id) 
//                 : [...prev, item] // Add the entire employee object
//         );
//     }
    
   
//     console.log('setSelected',selectedEmployees);

//     return(
//       <form onSubmit={handleSubmit}>
//         <h1>Schedule</h1>
//         {loading && <h3>Sending Mails...</h3>} {/* Show loading message */}

//         <table style={{border:'1px solid' }}>
//             <tr>
//                 <td>id</td>
//                 <td>action</td>
//                 <td>name</td>
//                 <td>email</td>
//             </tr>
//             {
//                employee.map((item)=>(
//                 <tr>
//                 <td>{item.id}</td>
//                 <td>
//                     <input type="checkbox" 
//                      checked={selectedEmployees.some(emp => emp.id === item.id)} // Check if the employee is selected
//                      onChange={()=>checkBoxChange(item)}
//                  />
//                 </td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 </tr>
//                )

//                )
//             }
//         </table>
//         <input type="date" onChange={(e)=>setDate(e.target.value)}/><br/>
//         <input type="time"onChange={(e)=>setTime(e.target.value)}/><br/>
//         <textarea
//         maxLength="200"
//         placeholder="Enter  comment for schedule meeting"
//         onChange={(e) => setComment(e.target.value)}
//       />
//       <button type="submit" disabled={loading}>Submit</button> {/* Disable button while loading */}

//         {/* <button type="submit">Submit</button> */}
//         </form>
    
//     )
// }
// export default Schedule;


/////////////////using normal css
// import { useEffect, useState } from "react";
// import { createSchedule, getAllEmployees } from "../Service/Api";

// import '../Css/Schedule.css';

// function Schedule() {
//     const [employee, setEmployee] = useState([]);
//     const [selectedEmployees, setSelectedEmployees] = useState([]);
//     const [comment, setComment] = useState('');
//     const [time, setTime] = useState('');
//     const [date, setDate] = useState('');
//     const [loading, setLoading] = useState(false); // State for loading
//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('userId');

//     useEffect(() => {
//         getEmployees();
//     }, []);

//     async function getEmployees() {
//         const { data } = await getAllEmployees(token);
//         setEmployee(data.result);
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         setLoading(true); // Set loading to true when starting the request

//         // Calling API
//         try {
//             const data = await createSchedule({
//                 employees: selectedEmployees,
//                 date,
//                 time,
//                 comment,
//                 userId
//             });

//             if (data.scheduleId === 'emailSent') {
//                 alert('Schedule created');
//             }
//         } catch (error) {
//             console.error('Error creating schedule:', error);
//             alert('Failed to create schedule. Please try again.');
//         } finally {
//             setLoading(false); // Set loading to false when the request is complete
//         }
//     }

//     function checkBoxChange(item) {
//         setSelectedEmployees((prev) =>
//             prev.some((emp) => emp.id === item.id)
//                 ? prev.filter((emp) => emp.id !== item.id)
//                 : [...prev, item] // Add the entire employee object
//         );
//     }

//     return (
//         <div className="schedule-container">
//             <form className="schedule-form" onSubmit={handleSubmit}>
//                 <h1>Schedule</h1>
//                 {loading && <h3 className="loading-message">Sending Mails...</h3>} {/* Show loading message */}

//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Action</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {employee.map((item) => (
//                             <tr key={item.id}>
//                                 <td>{item.id}</td>
//                                 <td>
//                                     <input
//                                         type="checkbox"
//                                         checked={selectedEmployees.some(emp => emp.id === item.id)} // Check if the employee is selected
//                                         onChange={() => checkBoxChange(item)}
//                                     />
//                                 </td>
//                                 <td>{item.name}</td>
//                                 <td>{item.email}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <input type="date" onChange={(e) => setDate(e.target.value)} required /><br />
//                 <input type="time" onChange={(e) => setTime(e.target.value)} required /><br />
//                 <textarea
//                     maxLength="200"
//                     placeholder="Enter comment for schedule meeting"
//                     onChange={(e) => setComment(e.target.value)}
//                 />
//                 <button type="submit" disabled={loading}>Submit</button> {/* Disable button while loading */}
//             </form>
//         </div>
//     );
// }

// export default Schedule;


//using react bootstrap

import { useEffect, useState } from "react";
import { createSchedule, getAllEmployees } from "../Service/Api";
import { Form, Button, Table, Spinner, Alert } from 'react-bootstrap';

function Schedule() {
    const [employee, setEmployee] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [comment, setComment] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false); // State for loading
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        getEmployees();
    }, []);

    async function getEmployees() {
        const { data } = await getAllEmployees(token);
        setEmployee(data.result);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true); // Set loading to true when starting the request

        // Calling API
        try {
            const data = await createSchedule({
                employees: selectedEmployees,
                date,
                time,
                comment,
                userId
            });

            if (data.scheduleId === 'emailSent') {
                alert('Schedule created');
            }
        } catch (error) {
            // console.error('Error creating schedule:', error);
            alert('Failed to create schedule. Please try again.');
        } finally {
            setLoading(false); // Set loading to false when the request is complete
        }
    }

    function checkBoxChange(item) {
        setSelectedEmployees((prev) =>
            prev.some((emp) => emp.id === item.id)
                ? prev.filter((emp) => emp.id !== item.id)
                : [...prev, item] // Add the entire employee object
        );
    }
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    const getMinTime = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 3); // Add 3 minutes
        return now.toTimeString().split(' ')[0].slice(0, 5); // Format to HH:MM
    };

    return (
        <div className="container mt-5">
            <h1>Schedule</h1>
            {loading && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Sending Mails...</span>
                </Spinner>
            )}
            <Form onSubmit={handleSubmit} className="mt-4">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Action</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={selectedEmployees.some(emp => emp.id === item.id)} // Check if the employee is selected
                                        onChange={() => checkBoxChange(item)}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Form.Group className="mb-3">
                   
                    <Form.Label>
                        Date  <span style={{ color: 'red' }}>*</span>
                    </Form.Label>
                    <Form.Control type="date" onChange={(e) => setDate(e.target.value)} required  min={today} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Time < span style={{ color: 'red' }}>*</span> 
                    
                    </Form.Label>
                    <Form.Control type="time" onChange={(e) => setTime(e.target.value)} required  min={date === today ? new Date().toTimeString().split(' ')[0].slice(0, 5) : "00:00"} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Comment < span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control
                        as="textarea"
                        maxLength="200"
                        placeholder="Enter comment for schedule meeting"
                        onChange={(e) => setComment(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit" disabled={loading} variant="primary">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Schedule;

////using MUI material

// import React, { useEffect, useState } from "react";
// import { createSchedule, getAllEmployees } from "../Service/Api";
// import {
//     Box,
//     Button,
//     Checkbox,
//     FormControl,
//     FormControlLabel,
//     FormGroup,
//     Grid,
//     TextField,
//     Typography,
//     CircularProgress,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     Card,
// } from '@mui/material';

// function Schedule() {
//     const [employees, setEmployees] = useState([]);
//     const [selectedEmployees, setSelectedEmployees] = useState([]);
//     const [comment, setComment] = useState('');
//     const [time, setTime] = useState('');
//     const [date, setDate] = useState('');
//     const [loading, setLoading] = useState(false);
//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('userId');

//     useEffect(() => {
//         getEmployees();
//     }, []);

//     async function getEmployees() {
//         const { data } = await getAllEmployees(token);
//         setEmployees(data.result);
//     }

//     async function handleSubmit(e) {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const data = await createSchedule({
//                 employees: selectedEmployees,
//                 date,
//                 time,
//                 comment,
//                 userId
//             });

//             if (data.scheduleId === 'emailSent') {
//                 alert('Schedule created');
//             }
//         } catch (error) {
//             console.error('Error creating schedule:', error);
//             alert('Failed to create schedule. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     }

//     function handleCheckboxChange(item) {
//         setSelectedEmployees((prev) =>
//             prev.some((emp) => emp.id === item.id)
//                 ? prev.filter((emp) => emp.id !== item.id)
//                 : [...prev, item]
//         );
//     }

//     return (
//         <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
//             <Card sx={{ padding: 3, boxShadow: 3 }}>
//                 <Typography variant="h4" gutterBottom align="center">
//                     Schedule Meeting
//                 </Typography>
//                 {loading && (
//                     <CircularProgress />
//                 )}
//                 <form onSubmit={handleSubmit}>
//                     <TableContainer component={Paper} sx={{ marginTop: 2 }}>
//                         <Table>
//                             <TableHead>
//                                 <TableRow>
//                                     <TableCell>Id</TableCell>
//                                     <TableCell>Action</TableCell>
//                                     <TableCell>Name</TableCell>
//                                     <TableCell>Email</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {employees.map((item) => (
//                                     <TableRow key={item.id} hover>
//                                         <TableCell>{item.id}</TableCell>
//                                         <TableCell>
//                                             <FormControlLabel
//                                                 control={
//                                                     <Checkbox
//                                                         checked={selectedEmployees.some(emp => emp.id === item.id)}
//                                                         onChange={() => handleCheckboxChange(item)}
//                                                     />
//                                                 }
//                                             />
//                                         </TableCell>
//                                         <TableCell>{item.name}</TableCell>
//                                         <TableCell>{item.email}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                     <Grid container spacing={2} sx={{ marginTop: 2 }}>
//                         <Grid item xs={6}>
//                             <TextField
//                                 fullWidth
//                                 label="Date"
//                                 type="date"
//                                 onChange={(e) => setDate(e.target.value)}
//                                 required
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                             />
//                         </Grid>
//                         <Grid item xs={6}>
//                             <TextField
//                                 fullWidth
//                                 label="Time"
//                                 type="time"
//                                 onChange={(e) => setTime(e.target.value)}
//                                 required
//                                 InputLabelProps={{
//                                     shrink: true,
//                                 }}
//                             />
//                         </Grid>
//                     </Grid>
//                     <TextField
//                         fullWidth
//                         label="Comment"
//                         multiline
//                         rows={4}
//                         maxLength="200"
//                         placeholder="Enter comment for schedule meeting"
//                         onChange={(e) => setComment(e.target.value)}
//                         sx={{ marginTop: 2 }}
//                     />
//                     <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }} disabled={loading}>
//                         Submit
//                     </Button>
//                 </form>
//             </Card>
//         </Box>
//     );
// }

// export default Schedule;