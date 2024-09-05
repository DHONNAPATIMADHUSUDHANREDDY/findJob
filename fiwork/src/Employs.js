import React from 'react';
import { useState ,useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Employes(){

    const [apply,setApply]=useState([]);
const fetchApplyData = () => {
    fetch("http://localhost:8080/apply/providerApplications")
        .then(res => res.json())
        .then(result => setApply(result))
        .catch(error => console.error('Error fetching apply data:', error));
};

useEffect(() => {
    fetchApplyData();
}, []);

    return(
        <>
         <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="applicants table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Phone</TableCell>
                                <TableCell>Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {apply.map((data) => (
                                <TableRow key={data.id}>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.phone}</TableCell>
                                    <TableCell>{data.mail}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </>
    );
}
export default Employes;