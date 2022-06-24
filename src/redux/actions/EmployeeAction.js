import * as actions from '../constants';

export const getEmployeeData = ()=>{
    return async (dispatch)=>{
        const res = await fetch('data.json',
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept':'application/json',
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((myjson)=>{
            dispatch({
                type: actions.GET_EMPLOYEE_DATA,
                payload: myjson,
            });
        })
    }
}

export const getEmployeeDetails = (id)=>{
    return async (dispatch)=>{
        const res = await fetch('data.json',
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept':'application/json',
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((myjson)=>{
            const filteredJson = myjson.filter(data => data.employeeId === id )
            dispatch({
                type: actions.GET_EMPLOYEE_SPORT_DATA,
                payload: filteredJson,
            });
        })
    }
}

export const clearEmployeeDetails = () => {
    return  (dispatch)=>{
        dispatch({
            type: actions.CLEAR_EMPLOYEE_DETAILS,
            payload: [],
        });
    }
}


export const getEmployeeOffers = (id)=>{
    return async (dispatch)=>{
        const res = await fetch('data.json',
        {
            headers:{
                'Content-Type': 'application/json',
                'Accept':'application/json',
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((myjson)=>{
            const filteredJson = myjson.filter(data => data.employeeId === id)
            let newArr
            filteredJson.map((data)=>{
                if(data.age>"45" && data.age<"60" && data.salary<100000){
                    return newArr = data
                }
                if(data.age<"45" && data.salary>100000){
                    return newArr = data
                }
                if(data.age>"60" && data.salary<100000){
                    return newArr = data
                }
            })
            dispatch({
                type: actions.GET_EMPLOYEE_OFFERS_DATA,
                payload: newArr,
            });
        })
    }
}