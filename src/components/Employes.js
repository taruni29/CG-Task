import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEmployeeData, getEmployeeDetails } from '../redux/actions';

export default function Employes() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employeeData = useSelector((state) => state.employee.employeeData);
    const employeeSportData = useSelector((state) => state.employee.employeeDetails);

    useEffect(() => {
        dispatch(getEmployeeData())
    }, [])

    const handleEmployeeDetails = (employeeId) => {
        dispatch(getEmployeeDetails(employeeId))
    }

    useEffect(() => {
        if (employeeSportData.length > 0) {
            navigate('/employee-details')
        }
    }, [employeeSportData])

    return (
        <div className="container">
            <h3>List of Employees</h3>
            <table>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Age</th>
                    <th>Weight</th>
                    <th>Salary</th>
                </tr>
                {
                    employeeData.length > 0 && employeeData.map((data, index) => {
                        return (
                            <tr key={index} className="employee-table-row" onClick={() => handleEmployeeDetails(data.employeeId)}>
                                <td>{data.employeeId}</td>
                                <td>{data.employeeName}</td>
                                <td>{data.age}</td>
                                <td>{data.weight}</td>
                                <td>{data.salary}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}