import axios from 'axios';


const URL='http://localhost:5000';


//login
async function login(username,password){
    const responce=await axios.post(`${URL}/login`,{username,password});
    console.log(responce.data);
    
    return responce.data;
}

//getAllEmployee
async function getAllEmployees(token){
    const responce=await axios.get(`${URL}/getemployee`,{
        headers:{
            Authorization:token,
        },
    });
    return responce;

}



async function createSchedule(employeeData) {

    const responce=await axios.post(`${URL}/schedule`,employeeData)
    return responce.data;
}



export  {login,getAllEmployees,createSchedule};