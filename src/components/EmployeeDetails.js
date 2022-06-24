import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearEmployeeDetails } from '../redux/actions';

export default function EmployeeDetails() {
    const employeeSportData = useSelector((state) => state.employee.employeeDetails);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleBack = () => {
        dispatch(clearEmployeeDetails())
        navigate('/home')
    }

    const handleOfferbtn = (employeeId) => {
        navigate(`/offers`, { state: { employeeId: employeeId } })
    }

    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>{employeeSportData[0].employeeName}, {employeeSportData[0].employeeId}</b>
                </h4>
                <p>Favourite Sport : {employeeSportData[0].sports?.sportName}</p>
                <p>Number of Matches : {employeeSportData[0].sports?.matches}</p>
                <p>Achivements : {employeeSportData[0].sports?.achivements}</p>
            </div>
            <div>
                <button className="button back-btn" onClick={handleBack}>back</button>
                <button className="button opt-offer-btn" onClick={() => handleOfferbtn(employeeSportData[0].employeeId)}>Opt for Gym Offer</button>
            </div>
        </div>
    )
}