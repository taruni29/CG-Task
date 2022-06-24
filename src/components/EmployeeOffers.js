import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getEmployeeOffers } from '../redux/actions';

export default function EmployeeOffers() {
    const dispatch = useDispatch()
    const { state } = useLocation()
    const [offerCancel, setOfferCancel] = useState(false)
    const [offerSuccess, setOfferSuccess] = useState(false)
    const employeeOffersData = useSelector((state) => state.employee.employeeOffers);

    useEffect(() => {
        dispatch(getEmployeeOffers(state.employeeId))
    }, [])

    const handleOfferSuccess = () => {
        if (window.confirm("The offer claimed!!!")) {
            setOfferSuccess(true)
        }
        else {
            setOfferCancel(true)
        }
    }

    const handleOfferCancel = () =>{
        document.location.href = "/home";
    }

    return (
        <div className="card">
            {
                offerCancel ?
                    <>
                        <h1> Your request has Cancelled !!</h1>
                        <button className="button back-btn" onClick={handleOfferCancel}>back</button>
                    </>
                    :
                offerSuccess ?
                <>
                <h1> Thank you. Your offer has claimed !!</h1>
                <button className="button back-btn" onClick={handleOfferCancel}>back</button>
            </>:
                    <>
                        <div className="container">
                            <h4>
                                <b>Congratulations, {employeeOffersData?.employeeName}</b>
                            </h4>
                            <p>You have a Gym membership offer of <b>{employeeOffersData?.offers?.membershipAmount}</b> per month</p>
                        </div>
                        <div>
                            <button className="button opt-offer-btn" onClick={handleOfferSuccess}>Opt for Offer</button>
                        </div>
                    </>
            }
        </div>
    )
}